
import { createAmplitudeEnvelope, createChorus, createFeedbackDelay, createFilter, createFrequencyEnvelope, createOmniOscillator, createPiano } from '/code/nexus-tone-components/script.js';

const options = {
  synth: {
    oscillator: {
      type: 'fatsquare',
      count: 5,
      spread: 10
    },
    envelope: {
      attack: 1,
      sustain: 1,
      release: 2
    },
    filter: {
      type: 'notch',
      Q: 10
    },
    filterEnvelope: {
      octaves: 0,
      baseFrequency: 2000
    }
  },
  chorus: {
    frequency: 2,
    delayTime: 0,
    depth: 0.7
  },
  delay: {
    delayTime: '8n',
    feedback: 0.7
  },
  filter: {
    frequency: 2000,
    type: 'lowpass',
    rolloff: -12
  },
  master: {
    gain: 1
  }
};

const synth = new Tone.PolySynth(10, Tone.MonoSynth, options.synth);
const chorus = new Tone.Chorus(
  options.chorus.frequency,
  options.chorus.delayTime,
  options.chorus.depth
);
const delay = new Tone.FeedbackDelay(
  options.delay.delayTime,
  options.delay.feedback
);
const fxFilter = new Tone.Filter(
  options.filter.frequency,
  options.filter.type,
  options.filter.rolloff
);
const master = new Tone.Gain(options.master.gain);

synth.chain(chorus, delay, fxFilter, Tone.Master);

const onMidi = ([status, data0, data1]) => {
  switch (status) {
    case 144: {
      const freq = Tone.Midi(data0).toFrequency();
      synth.triggerAttack(freq, '+0', data1 / 127);
      break;
    }
    case 128: {
      const freq = Tone.Midi(data0).toFrequency();
      synth.triggerRelease(freq);
      break;
    }
  }
};

const { oscillator, envelope, filter, filterEnvelope } = synth.get();

createOmniOscillator(
  '#synth-oscillator',
  Object.assign({}, oscillator, {
    type: oscillator.type.replace('fat', '')
  }),
  value => {
    Object.keys(value).forEach(key => {
      const val = key === 'type' ? `fat${value[key]}` : value[key];
      synth.set(`oscillator,${key}`, val);
    });
  }
);

createAmplitudeEnvelope('#synth-envelope', envelope, value => {
  synth.set({ envelope: value });
});

createFilter('#synth-filter', filter, value => {
  synth.set({ filter: value });
});

createFrequencyEnvelope('#synth-filter-envelope', filterEnvelope, value => {
  synth.set({ filterEnvelope: value });
});

createChorus('#chorus', chorus.get(), value => {
  chorus.set(value);
});

createFeedbackDelay('#delay', delay.get(), value => {
  delay.set(value);
});

createFilter('#filter', fxFilter.get(), value => {
  fxFilter.set(value);
});

createPiano('#piano', { mode: 'button' }, onMidi);

