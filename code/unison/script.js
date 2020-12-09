
import { createChorus, createAmplitudeEnvelope, createOmniOscillator, createPiano } from '/code/nexus-tone-components/script.js';

const options = {
  synth: {
    oscillator: {
      type: 'fatsawtooth'
    }
  },
  chorus: {
    frequency: 2,
    delayTime: 0,
    depth: 0.7
  }
};

const synth = new Tone.PolySynth(4, Tone.Synth, options.synth);
const chorus = new Tone.Chorus(
  options.chorus.frequency,
  options.chorus.delayTime,
  options.chorus.depth
);

synth.chain(chorus, Tone.Master);

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

createChorus('#chorus', chorus.get(), value => {
  chorus.set(value);
});

createPiano('#piano', { mode: 'button' }, onMidi);

