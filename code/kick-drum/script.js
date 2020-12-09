
import { createAmplitudeEnvelope, createOmniOscillator, createPiano } from '/code/nexus-tone-components/script.js';

const options = {
  synth: {
    pitchDecay: 0.005,
    envelope: {
      decay: 0.04,
      sustain: 0,
      release: 0.04
    }
  }
};

const synth = new Tone.MembraneSynth(options.synth).toMaster();

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

const { oscillator, envelope, pitchDecay, octaves } = synth.get();

createOmniOscillator('#synth-oscillator', oscillator, (value) => {
  synth.set({ oscillator: value });
});

createAmplitudeEnvelope('#synth-envelope', envelope, (value) => {
  synth.set({ envelope: value });
});

new Nexus.Slider('#synth-pitch-decay', {
  step: 0.001,
  value: pitchDecay
}).on('change', (value) => {
  synth.set('pitchDecay', value);
});

new Nexus.Slider('#synth-octaves', {
  min: 1,
  max: 20,
  step: 1,
  value: octaves
}).on('change', (value) => {
  synth.set('octaves', value);
});

createPiano('#piano', { mode: 'button' }, onMidi);

