
import { createAmplitudeEnvelope, createFilter, createFrequencyEnvelope, createOmniOscillator, createPiano } from '/code/nexus-tone-components/script.js';

const options = {
  synth: {
    filter: {
      rolloff: -12
    },
    envelope: {
      decay: 0.005,
      release: 0.005
    },
    filterEnvelope: {
      attack: 0.01,
      decay: 0.3,
      sustain: 0.01,
      baseFrequency: 300,
      octaves: 3
    }
  }
};

const synth = new Tone.MonoSynth(options.synth).toMaster();

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

const { oscillator, envelope, filter, filterEnvelope, ...rest } = synth.get();

createOmniOscillator('#synth-oscillator', oscillator, (value) => {
  synth.set({ oscillator: value });
});

createAmplitudeEnvelope('#synth-envelope', envelope, (value) => {
  synth.set({ envelope: value });
});

createFilter('#synth-filter', filter, (value) => {
  synth.set({ filter: value });
});

createFrequencyEnvelope('#synth-filter-envelope', filterEnvelope, (value) => {
  synth.set({ filterEnvelope: value });
});

createPiano('#piano', { mode: 'button' }, onMidi);

