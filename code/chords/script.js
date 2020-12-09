
import { createAmplitudeEnvelope, createOmniOscillator, createPiano, MultiSynth } from '/code/nexus-tone-components/script.js';

const options = {
  synth: {
    oscillator: {
      type: 'sine'
    },
    envelope: {
      decay: 0,
      sustain: 1,
      release: 0.005
    },
    suboscillators: [
      {
        detune: 400
      },
      {
        detune: 700
      }
    ]
  }
};

const synth = new MultiSynth(options.synth).toMaster();

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

createOmniOscillator('#synth-suboscillators-1', suboscillators[0], value => {
  Object.keys(value).forEach(key => {
    synth.set(`suboscillators.1.${key}`, value[key]);
  });
});

createAmplitudeEnvelope('#synth-envelope', envelope, value => {
  synth.set({ envelope: value });
});

createPiano('#piano', { mode: 'button' }, onMidi);

