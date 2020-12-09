
import { createAmplitudeEnvelope, createFreeverb, createGain, createOmniOscillator, createPiano, MultiSynth } from '/code/nexus-tone-components/script.js';

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
        type: 'square',
        detune: -1200
      }
    ]
  },
  reverb: {
    roomSize: 0.7,
    dampening: 1000
  },
  master: {
    gain: 0.1
  }
};

const synth = new Tone.PolySynth(10, MultiSynth, options.synth);

const reverb = new Tone.Freeverb(
  options.reverb.roomSize,
  options.reverb.dampening
);

const master = new Tone.Gain(options.master);

synth.chain(reverb, master, Tone.Master);

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

createFreeverb('#reverb', reverb.get(), value => {
  reverb.set(value);
});

createGain('#master', master.get(), value => {
  master.set(value);
});

createPiano('#piano', { mode: 'button' }, onMidi);

