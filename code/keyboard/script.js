
import { createAmplitudeEnvelope, createOmniOscillator, createPiano, linearScale } from '/code/nexus-tone-components/script.js';

const options = {
  synth: {
    oscillator: {
      type: 'sine'
    },
    envelope: {
      decay: 1,
      sustain: 0,
      release: 0.2
    }
  }
};

const synth = new Tone.PolySynth(24, Tone.Synth, options.synth).toMaster();

const scaleDecay = linearScale([21, 108], [1, 0.5]);
const scaleVelocity = linearScale([21, 108], [0.5, 1]);

const onMidi = ([status, data0, data1]) => {
  switch (status) {
    case 144: {
      const freq = Tone.Midi(data0).toFrequency();
      // TODO get/set decay on specific voice
      const decay = synth.get('envelope.decay')['envelope']['decay'];
      synth.set('envelope.decay', decay * scaleDecay(data0));
      const adjustedVelocity = data1 * scaleVelocity(data0);
      synth.triggerAttack(freq, '+0', adjustedVelocity / 127);
      break;
    }
    case 128: {
      const freq = Tone.Midi(data0).toFrequency();
      synth.triggerRelease(freq);
      // TODO reset decay on specific voice, get delay from element
      synth.set('envelope.decay', options.synth.envelope.decay);
      break;
    }
  }
};

const { oscillator, envelope } = synth.get();

createOmniOscillator('#synth-oscillator', oscillator, value => {
  synth.set({ oscillator: value });
});

createAmplitudeEnvelope('#synth-envelope', envelope, value => {
  synth.set({ envelope: value });
});

createPiano('#piano', { mode: 'button' }, onMidi);

