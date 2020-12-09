
import { createCompressor, createDelay, createGain, createFilter, createFreeverb, createLfo, createLoop, createOmniOscillator, createTransport } from '/code/nexus-tone-components/script.js';

const freq = Tone.Midi(48).toFrequency();

const options = {
  oscillators: [{
    oscillator: {
      frequency: freq,
      type: 'fatsine'
    },
    gain: {
      gain: 1
    }
  }, {
    oscillator: {
      frequency: freq,
      type: 'fattriangle',
      detune: -1200
    },
    gain: {
      gain: 0.8
    }
  }, {
    oscillator: {
      frequency: freq,
      type: 'fatsquare'
    },
    gain: {
      gain: 0.1
    }
  }],
  filter: {
    frequency: 1000,
    Q: 30
  },
  lfo: {
    frequency: .25,
    min: 500,
    max: 2000
  },
  delay: {
    delayTime: 0.1
  },
  reverb: {
    roomSize: 0.7,
    dampening: 1000,
  },
  compressor: {
    ratio: 12
  },
  loop: {
    interval: '8n'
  },
  transport: {
    bpm: 96,
    state: 'started'
  },
  master: {
    gain: 0.2
  }
};

const oscillator1 = new Tone.OmniOscillator(options.oscillators[0].oscillator);
const gain1 = new Tone.Gain(options.oscillators[0].gain.gain);
const oscillator2 = new Tone.OmniOscillator(options.oscillators[1].oscillator);
const gain2 = new Tone.Gain(options.oscillators[1].gain.gain);
const oscillator3 = new Tone.OmniOscillator(options.oscillators[2].oscillator);
const gain3 = new Tone.Gain(options.oscillators[2].gain.gain);
const filter = new Tone.Filter(options.filter);
const lfo = new Tone.LFO(options.lfo.frequency, options.lfo.min, options.lfo.max);
const delay = new Tone.Delay(options.delay);
const reverb = new Tone.Freeverb(options.reverb.roomSize, options.reverb.dampening);
const compressor = new Tone.Compressor(options.compressor);
const master = new Tone.Gain(options.master.gain);

filter.chain(delay, reverb, compressor, master, Tone.Master);
lfo.connect(filter.frequency).start()
oscillator1.chain(gain1, filter);
oscillator2.chain(gain2, filter);
oscillator3.chain(gain3, filter);
oscillator1.start();
oscillator2.start();
oscillator3.start();

if (options.transport.state === 'started') Tone.Transport.start();

const loop = new Tone.Loop(time => {
  const randomDetune = new Tone.CtrlRandom({ min: -200, max: 200 }).value;
  filter.set('detune', randomDetune);
}, options.loop.interval).start();

createOmniOscillator('#oscillator-1', oscillator1.get(), value => {
  oscillator1.set(value);
});

createGain('#gain-1', gain1.get(), value => {
  gain1.set(value);
});

createOmniOscillator('#oscillator-2', oscillator2.get(), value => {
  oscillator2.set(value);
});

createGain('#gain-2', gain2.get(), value => {
  gain2.set(value);
});

createOmniOscillator('#oscillator-3', oscillator3.get(), value => {
  oscillator3.set(value);
});

createGain('#gain-3', gain3.get(), value => {
  gain3.set(value);
});

createGain('#master', master.get(), value => {
  master.set(value);
});

createFilter('#filter', filter.get(), value => {
  filter.set(value);
});

createLfo('#lfo', lfo.get(), value => {
  lfo.set(value);
});

createDelay('#delay', delay.get(), value => {
  delay.set(value);
});

createFreeverb('#reverb', reverb.get(), value => {
  reverb.set(value);
});

createCompressor('#compressor', compressor.get(), value => {
  compressor.set(value);
});

createLoop('#loop', loop.get(), value => {
  loop.set(value);
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
  });
}); 

