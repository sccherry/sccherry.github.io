
import { createAmplitudeEnvelope, createFilter, createFrequencyEnvelope, createLfo, createLoop, createOmniOscillator, createPiano, createTransport } from '/code/nexus-tone-components/script.js';

const options = {
  synth: {
    oscillator: {
      type: 'sawtooth' 
    },
    envelope: {
      decay: 0.8,
      sustain: 0,
      release: 0.02
    },
    filter: {
      rolloff: -12
    },
    filterEnvelope: {
      octaves: 0,
      decay: 0.8,
      sustain: 0,
      release: 0.02
    }
  },
  loop: {
    interval: '8n'
  },
  lfo: {
    frequency: '1n',
    min: 100, 
    max: 2000, 
    type: 'sawtooth'
  },
  transport: {
    state: 'started'
  }
};

const synth = new Tone.PolySynth(4, Tone.MonoSynth, options.synth);
const lfo = new Tone.LFO(options.lfo.frequency, options.lfo.min, options.lfo.max);

synth.chain(Tone.Master);

synth.voices.forEach(voice => {
  lfo.connect(voice.filter.frequency);
});
lfo.type = options.lfo.type;
lfo.sync().start();

if (options.transport.state === 'started') Tone.Transport.start();

const voices = new Set();

const loop = new Tone.Loop((time) => {
  if (voices.size > 0) {
    const freqs = Array.from(voices).map(note => Tone.Midi(note).toFrequency());
    synth.triggerAttackRelease(freqs, '1n', time);
  }
}, options.loop.interval).start();

const onMidi = ([status, data0, data1]) => {
  switch (status) {
    case 144: {
      voices.add(data0);
      break;
    }
    case 128: {
      voices.delete(data0);
      break;
    }
  }
};

const { oscillator, envelope, filter, filterEnvelope } = synth.get();

createOmniOscillator('#synth-oscillator', oscillator, value => {
  synth.set({ oscillator: value })
})

createAmplitudeEnvelope('#synth-envelope', envelope, value => {
  synth.set({ envelope: value })
})

createFilter('#synth-filter', filter, value => {
  synth.set({ filter: value })
})

createFrequencyEnvelope('#synth-filter-envelope', filterEnvelope, value => {
  synth.set({ filterEnvelope: value });
});

createLoop('#loop', loop.get(), value => {
  loop.set(value);
});

createLfo('#lfo', lfo.get(), value => {
  lfo.set(value);
});

createTransport('#transport', {
  bpm: Tone.Transport.bpm.value,
  state: Tone.Transport.state === 'started'
}, value => {
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
  })
})

createPiano('#piano', { mode: 'button' }, onMidi);

