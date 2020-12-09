
import { createAutoFilter, createFreeverb, createNoise, createPiano, createTransport } from '/code/nexus-tone-components/script.js';

const options = {
  noise: {
    type: 'white' 
  },
  filter: {
    frequency: '4m',
    baseFrequency: 20,
    octaves: 6,
    type: 'sawtooth',
    filter: {
      type: 'bandpass',
      Q: 100
    }
  },
  reverb: {
    roomSize: 0.2,
    dampening: 1000
  },
  transport: {
    state: 'started'
  }
};

const noise = new Tone.Noise(options.noise.type);
const filter = new Tone.AutoFilter(options.filter);
filter._lfo.set('phase', 180);
const reverb = new Tone.Freeverb(options.reverb.roomSize, options.reverb.dampening);

noise.chain(filter, reverb, Tone.Master);

if (options.transport.state === 'started') Tone.Transport.start();

const onMidi = ([status, data0, data1]) => {
  switch (status) {
    case 144: {
      const len = Tone.Time(1 / filter.get('frequency').frequency).toSeconds();

      Tone.Transport.schedule(time => {
        reverb.set('roomSize', options.reverb.roomSize);
        reverb.roomSize.linearRampTo(0.8, len, time);
        filter.filter.Q.set(options.filter.filter.Q);
        filter.filter.Q.linearRampTo(0.1, len, time);
        noise.start(time).stop(time + len);
        filter.start(time).stop(time + len);
      }, Tone.Transport.nextSubdivision(len));
      break;
    }
  }
};

createNoise('#noise', noise.get(), value => {
  noise.set(value);
});

createAutoFilter('#filter', filter.get(), value => {
  filter.set(value);
});

createFreeverb('#reverb', reverb.get(), value => {
  reverb.set(value);
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
});

createPiano('#piano', { mode: 'button' }, onMidi);

