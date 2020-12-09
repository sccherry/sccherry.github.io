
import { createAmplitudeEnvelope, createAutoFilter, createOmniOscillator, createPiano, createTransport, MultiSynth } from '/code/nexus-tone-components/script.js';

const options = {
  synth: {
    oscillator: {
      type: 'sawtooth'
    },
    envelope: {
      decay: 0,
      sustain: 1
    },
    suboscillators: [
      {
        type: 'square',
        detune: -1200,
        phase: 180
      }
    ]
  },
  autoFilter: {
    baseFrequency: 2000,
    frequency: '2n',
    type: 'sawtooth'
  },
  transport: {
    state: 'started'
  }
};

const synth = new MultiSynth(options.synth);
const autoFilter = new Tone.AutoFilter(
  options.autoFilter.frequency,
  options.autoFilter.baseFrequency
);

autoFilter.type = options.autoFilter.type;
autoFilter.sync().start();

synth.chain(autoFilter, Tone.Master);

if (options.transport.state === 'started') Tone.Transport.start();

const onMidi = ([status, data0, data1]) => {
  switch (status) {
    case 144: {
      const freq = Tone.Midi(data0).toFrequency();
      synth.triggerAttack(freq, '+0', data1 / 127);
      break;
    }
    case 128: {
      synth.triggerRelease();
      break;
    }
  }
};

const { oscillator, envelope, suboscillators } = synth.get();

createOmniOscillator('#synth-oscillator', oscillator, value => {
  synth.set({ oscillator: value });
});

createOmniOscillator('#synth-suboscillators-0', suboscillators[0], value => {
  Object.keys(value).forEach(key => {
    synth.set(`suboscillators.0.${key}`, value[key]);
  });
});

createAmplitudeEnvelope('#synth-envelope', envelope, value => {
  synth.set({ envelope: value });
});

createAutoFilter('#auto-filter', autoFilter.get(), value => {
  autoFilter.set(value);
});

createTransport(
  '#transport',
  {
    bpm: Tone.Transport.bpm.value,
    state: Tone.Transport.state === 'started'
  },
  value => {
    Object.keys(value).forEach(key => {
      switch (key) {
        case 'bpm': {
          Tone.Transport.bpm.value = value[key];
          break;
        }
        case 'state': {
          if (value[key]) {
            Tone.Transport.start();
          } else {
            Tone.Transport.stop();
          }
        }
      }
    });
  }
);

createPiano('#piano', { mode: 'button' }, onMidi);

