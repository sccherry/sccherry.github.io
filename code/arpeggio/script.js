
import { createAmplitudeEnvelope, createOmniOscillator, createPattern, createPiano, createTransport, MultiSynth } from '/code/nexus-tone-components/script.js';

const options = {
  synth: {
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0.005,
      decay: 0.7,
      sustain: 0.005,
      release: 0.3
    },
    suboscillators: [
      {
        type: 'square',
        detune: -1200
      }
    ]
  },
  pattern: {
    interval: '8n'
  },
  transport: {
    state: 'started'
  }
};

const synth = new MultiSynth(options.synth).toMaster();

const pattern = new Tone.Pattern(
  (time, note) => {
    synth.triggerAttackRelease(note, pattern.interval, time);
  },
  [],
  options.pattern.pattern
);
pattern.interval = options.pattern.interval;

if (options.transport.state === 'started') Tone.Transport.start();

const values = new Set();

const onMidi = ([status, data0, data1]) => {
  switch (status) {
    case 144: {
      const freq = Tone.Midi(data0).toFrequency();
      values.add(freq);
      pattern.values = Array.from(values).sort();
      if (pattern.values.length === 1) pattern.start();
      break;
    }
    case 128: {
      const freq = Tone.Midi(data0).toFrequency();
      values.delete(freq);
      pattern.values = Array.from(values).sort();
      if (pattern.values.length === 0) pattern.stop();
      break;
    }
  }
};

const { oscillator, envelope, suboscillators } = synth.get();

createPattern('#pattern', pattern, value => {
  Object.keys(value).forEach(key => {
    pattern[key] = value[key];
  });
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
          Tone.Transport.bpm.value = value;
          break;
        }
        case 'state': {
          if (value[key]) {
            Tone.Transport.start();
          } else {
            Tone.Transport.stop();
          }
          break;
        }
      }
    });
  }
);

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

createPiano('#piano', { mode: 'toggle' }, onMidi);

