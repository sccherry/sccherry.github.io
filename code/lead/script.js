
import { clamp, createAmplitudeEnvelope, createFilter, createFrequencyEnvelope, createOmniOscillator, createPiano, linearScale } from '/code/nexus-tone-components/script.js';
const { defaultArg, MonoSynth } = window.Tone;

const options = {
  synth: {
    portamento: 0.3,
    oscillator: {
      type: 'sawtooth'
    },
    envelope: {
      decay: 0,
      sustain: 1,
      release: 0.005
    },
    filterEnvelope: {
      attack: 0,
      decay: 0,
      octaves: 0
    }
  }
};

const unitToFreq = (min, max) => value => {
  const exp = Math.log2(max / min);
  const scale = linearScale([0, 1], [0, exp]);

  return min * Math.pow(2, scale(value));
};

class GlideSynth extends MonoSynth {
  static get defaults() {
    return {
      ...MonoSynth.defaults,
      legato: true,
    };
  }

  constructor(options) {
    // eslint-disable-next-line no-param-reassign
    options = defaultArg(options, GlideSynth.defaults);
    super(options);
    this.playing = 0;
    this.legato = options.legato;
  }

  _triggerEnvelopeAttack(...args) {
    this.playing += 1;

    super._triggerEnvelopeAttack(...args);

    return this;
  }

  _triggerEnvelopeRelease(...args) {
    this.playing = Math.max(0, this.playing - 1);

    if (this.playing === 0 || !this.legato) {
      super._triggerEnvelopeRelease(...args);
    }

    return this;
  }

  setNote(note, time) {
    const { portamento } = this;

    if (this.playing === 1 && this.legato) {
      this.portamento = 0;
    }

    super.setNote(note, time);

    this.portamento = portamento;

    return this;
  }
}


const synth = new GlideSynth(options.synth).toMaster();

const onMidi = ([status, data0, data1]) => {
  switch (status) {
    // note on
    case 144: {
      const freq = Tone.Midi(data0).toFrequency();
      synth.triggerAttack(freq, '+0', data1 / 127);
      break;
    }
    // note off
    case 128: {
      synth.triggerRelease();
      break;
    }
    // control change
    case 176: {
      switch (data0) {
        // mod wheel
        case 1: {
          const next = unitToFreq(20, 20000)(data1 / 127);
          synth.set('filterEnvelope.baseFrequency', next);
        }
      }
      break;
    }
    // pitch bend
    case 224: {
      const detune = data0 * 128 + data1;
      const scale = linearScale([0, 16383], [-100, 100]);
      const value = clamp(-100, 100)(Math.floor(scale(detune)));

      synth.detune.linearRampToValueAtTime(value, '+0.2');
      break;
    }
  }
};

const {
  oscillator,
  envelope,
  filter,
  filterEnvelope,
  portamento
} = synth.get();

createOmniOscillator('#synth-oscillator', oscillator, value => {
  synth.set({ oscillator: value });
});

createAmplitudeEnvelope('#synth-envelope', envelope, value => {
  synth.set({ envelope: value });
});

new Nexus.Slider('#synth-portamento', {
  min: 0,
  max: 2,
  step: 0.001,
  value: portamento
}).on('change', value => {
  synth.set('portamento', value);
});

createFilter('#synth-filter', filter, value => {
  synth.set({ filter: value });
});

createFrequencyEnvelope('#synth-filter-envelope', filterEnvelope, value => {
  synth.set({ filterEnvelope: value });
});

createPiano('#piano', { mode: 'button' }, onMidi);

