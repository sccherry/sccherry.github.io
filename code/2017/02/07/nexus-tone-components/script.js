
const { Multislider, Piano, Select, Slider, Toggle } = window.Nexus;
const { defaultArg, CtrlPattern, OmniOscillator, Oscillator, Synth, Time } = window.Tone;

/**
 * Global variables
 */

const TONE_OSCILLATOR_TYPES = Object.values(Oscillator.Type).filter(
  (type) => type !== 'custom'
);

const TONE_OSCILLATOR_PREFIXES = ['fm', 'am', 'fat', 'pwm', 'pulse'];

const TONE_NOISE_TYPES = ['white', 'pink', 'brown'];

const TONE_ENVELOPE_KEYS = ['attack', 'decay', 'sustain', 'release'];

const TONE_FILTER_TYPES = [
  'lowpass',
  'highpass',
  'bandpass',
  'lowshelf',
  'highshelf',
  'notch',
  'allpass',
  'peaking',
];

const TONE_FILTER_ROLLOFFS = [-12, -24, -48, -96];
const TONE_PATTERN_TYPES = Object.values(CtrlPattern.Type);
const TONE_TIME_INTERVALS = ['4n', '8n', '16n'];

/**
 * Utilities
 */

export const clamp = (min, max) => (value) => {
  return Math.max(min, Math.min(max, value));
};

export const linearScale = ([dMin, dMax], [rMin, rMax]) => (value) => {
  return rMin + (rMax - rMin) * ((value - dMin) / (dMax - dMin));
};

/**
 * Tone components
 */

export class MultiSynth extends Synth {
  constructor(options) {
    options = defaultArg(options, Synth.defaults);
    super(options);

    this.suboscillators = options.suboscillators.map((oscOptions) => {
      return new OmniOscillator(oscOptions);
    });

    this.suboscillators.forEach((oscillator) => {
      oscillator.chain(this.envelope);
    });
  }

  _triggerEnvelopeAttack(time, velocity) {
    super._triggerEnvelopeAttack(time, velocity);

    this.suboscillators.forEach((osc) => {
      osc.start(time);

      if (this.envelope.sustain === 0) {
        osc.stop(time + this.envelope.attack + this.envelope.decay);
      }
    });

    return this;
  }

  _triggerEnvelopeRelease(time) {
    super._triggerEnvelopeRelease(time);
    time = this.toSeconds(time);

    this.suboscillators.forEach((osc) => {
      osc.stop(time + this.envelope.release);
    });

    return this;
  }

  setNote(note, time) {
    super.setNote(note, time);

    this.suboscillators.forEach((osc) => {
      osc.frequency.setValueAtTime(note, time);
    });

    return this;
  }

  get() {
    return {
      ...super.get(),
      suboscillators: this.suboscillators.map((osc) => {
        return osc.get();
      }),
    };
  }
}

/**
 * Nexus components
 */

export const createAmplitudeEnvelope = (
  selector,
  { attack, decay, sustain, release },
  onChange
) => {
  new Multislider(`${selector}-envelope`, {
    numberOfSliders: 4,
    min: 0,
    max: 1,
    step: 0.001,
    values: [attack, decay, sustain, release],
  }).on('change', ({ index, value }) => {
    const key = TONE_ENVELOPE_KEYS[index];

    onChange({ [key]: value });
  });
};

export const createAutoFilter = (
  selector,
  { frequency, type, baseFrequency, octaves, filter },
  onChange
) => {
  new Select(`${selector}-frequency`, {
    options: TONE_TIME_INTERVALS,
  }).on('change', ({ index, value }) => {
    onChange({ frequency: value });
  }).value = frequency;

  new Select(`${selector}-type`, {
    options: TONE_OSCILLATOR_TYPES,
  }).on('change', ({ value, index }) => {
    onChange({ type: value });
  }).value = type;

  new Slider(`${selector}-base-frequency`, {
    min: 20,
    max: 2000,
    step: 1,
    value: baseFrequency,
  }).on('change', (value) => {
    onChange({ baseFrequency: value });
  });

  new Slider(`${selector}-octaves`, {
    min: 1,
    max: 20,
    step: 1,
    value: octaves,
  }).on('change', (value) => {
    onChange({ octaves: value });
  });

  new Select(`${selector}-filter-type`, {
    options: TONE_FILTER_TYPES,
  }).on('change', ({ index, value }) => {
    onChange({ filter: { type: value } });
  }).value = filter.type;

  new Select(`${selector}-filter-rolloff`, {
    options: TONE_FILTER_ROLLOFFS,
  }).on('change', ({ value, index }) => {
    onChange({ filter: { rolloff: value } });
  }).value = filter.rolloff;

  new Slider(`${selector}-filter-q`, {
    min: 1,
    max: 8,
    step: 1,
    value: filter.Q,
  }).on('change', (value) => {
    onChange({ filter: { Q: value } });
  });
};

export const createChorus = (
  selector,
  { frequency, delayTime, depth },
  onChange
) => {
  new Slider(`${selector}-frequency`, {
    min: 0,
    max: 10,
    step: 0.001,
    value: frequency,
  }).on('change', (value) => {
    onChange({ frequency: value });
  });

  new Slider(`${selector}-delay-time`, {
    min: 0,
    max: 2,
    step: 0.001,
    value: delayTime,
  }).on('change', (value) => {
    onChange({ delayTime: value });
  });

  new Slider(`${selector}-depth`, {
    min: 0,
    max: 1,
    step: 0.001,
    value: depth,
  }).on('change', (value) => {
    onChange({ depth: value });
  });
};

export const createCompressor = (selector, { threshold, ratio }, onChange) => {
  new Slider(`${selector}-threshold`, {
    min: -48,
    max: 0,
    step: 1,
    value: threshold,
  }).on('change', (value) => {
    onChange({ threshold: value });
  });

  new Slider(`${selector}-ratio`, {
    min: 0,
    max: 20,
    step: 1,
    value: ratio,
  }).on('change', (value) => {
    onChange({ ratio: value });
  });
};

export const createDelay = (selector, { delayTime }, onChange) => {
  new Slider(`${selector}-delay-time`, {
    min: 0,
    max: 2,
    step: 0.001,
    value: delayTime,
  }).on('change', (value) => {
    onChange({ delayTime: value });
  });
};

export const createFeedbackDelay = (
  selector,
  { delayTime, feedback },
  onChange
) => {
  new Select(`${selector}-delay-time`, {
    options: TONE_TIME_INTERVALS,
  }).on('change', ({ index, value }) => {
    onChange({ delayTime: value });
  }).value = delayTime;

  new Slider(`${selector}-feedback`, {
    min: 0,
    max: 1,
    step: 0.001,
    value: feedback,
  }).on('change', (value) => {
    onChange({ feedback: value });
  });
};

export const createFilter = (
  selector,
  { frequency, Q, type, rolloff },
  onChange
) => {
  new Select(`${selector}-type`, {
    options: TONE_FILTER_TYPES,
  }).on('change', ({ index, value }) => {
    onChange({ type: value });
  }).value = type;

  new Select(`${selector}-rolloff`, {
    options: TONE_FILTER_ROLLOFFS,
  }).on('change', ({ value, index }) => {
    onChange({ rolloff: value });
  }).value = String(rolloff);

  new Slider(`${selector}-frequency`, {
    min: 10,
    max: 24000,
    step: 1,
    value: frequency,
  }).on('change', (value) => {
    onChange({ frequency: value });
  });

  new Slider(`${selector}-q`, {
    min: 1,
    max: 8,
    step: 1,
    value: Q,
  }).on('change', (value) => {
    onChange({ Q: value });
  });
};

export const createFreeverb = (selector, { dampening, roomSize }, onChange) => {
  new Slider(`${selector}-room-size`, {
    min: 0,
    max: 2,
    step: 0.001,
    value: roomSize,
  }).on('change', (value) => {
    onChange({ roomSize: value });
  });

  new Slider(`${selector}-dampening`, {
    min: 20,
    max: 20000,
    step: 1,
    value: dampening,
  }).on('change', (value) => {
    onChange({ dampening: value });
  });
};

export const createFrequencyEnvelope = (
  selector,
  { attack, decay, sustain, release, baseFrequency, octaves, exponent },
  onChange
) => {
  new Multislider(`${selector}-envelope`, {
    numberOfSliders: 4,
    min: 0,
    max: 3,
    step: 0.001,
    values: [attack, decay, sustain, release],
  }).on('change', ({ index, value }) => {
    const key = TONE_ENVELOPE_KEYS[index];

    onChange({ [key]: value });
  });

  new Slider(`${selector}-base-frequency`, {
    min: 10,
    max: 24000,
    step: 1,
    value: baseFrequency,
  }).on('change', (value) => {
    onChange({ baseFrequency: value });
  });

  new Slider(`${selector}-octaves`, {
    min: 1,
    max: 20,
    step: 1,
    value: octaves,
  }).on('change', (value) => {
    onChange({ octaves: value });
  });

  new Slider(`${selector}-exponent`, {
    min: 1,
    max: 5,
    step: 1,
    value: exponent,
  }).on('change', (value) => {
    onChange({ exponent: value });
  });
};

export const createGain = (selector, { gain }, onChange) => {
  new Slider(`${selector}-gain`, {
    min: 0,
    max: 1,
    step: 0.001,
    value: gain,
  }).on('change', (value) => {
    onChange({ gain: value });
  });
};

export const createLfo = (
  selector,
  { frequency, type, max, min },
  onChange
) => {
  new Select(`${selector}-frequency`, {
    options: TONE_TIME_INTERVALS,
  }).on('change', ({ index, value }) => {
    onChange({ frequency: value });
  }).value = frequency;

  new Select(`${selector}-type`, {
    options: TONE_OSCILLATOR_TYPES,
  }).on('change', ({ value, index }) => {
    onChange({ type: value });
  }).value = type;

  new Slider(`${selector}-min`, {
    min: 1,
    max: 20,
    step: 1,
    value: min,
  }).on('change', (value) => {
    onChange({ min: value });
  });

  new Slider(`${selector}-max`, {
    min: 1,
    max: 20,
    step: 1,
    value: max,
  }).on('change', (value) => {
    onChange({ max: value });
  });
};

export const createLoop = (selector, { interval }, onChange) => {
  new Select(`${selector}-interval`, {
    options: TONE_TIME_INTERVALS,
  }).on('change', ({ value, index }) => {
    onChange({ interval: value });
  }).value = Time(interval).toNotation();
};

export const createNoise = (selector, { type }, onChange) => {
  new Select(`${selector}-type`, {
    options: TONE_NOISE_TYPES,
  }).on('change', ({ value, index }) => {
    onChange({ type: value });
  }).value = type;
};

export const createOmniOscillator = (
  selector,
  { type, detune, phase },
  onChange
) => {
  const prefix =
    TONE_OSCILLATOR_PREFIXES.find((pre) => type.startsWith(pre)) || '';

  new Select(`${selector}-type`, {
    options: TONE_OSCILLATOR_TYPES,
  }).on('change', ({ value, index }) => {
    onChange({ type: `${prefix}${value}` });
  }).value = type.slice(prefix.length);

  const octaveDetune = new Slider(`${selector}-detune-octave`, {
    min: -3600,
    max: 3600,
    step: 1200,
    value: Math.floor(detune / 1200) * 1200,
  });

  const coarseDetune = new Slider(`${selector}-detune-coarse`, {
    min: -1200,
    max: 1200,
    step: 100,
    value: Math.floor((detune % 1200) / 100) * 100,
  });

  const fineDetune = new Slider(`${selector}-detune-fine`, {
    min: -100,
    max: 100,
    step: 1,
    value: (detune % 1200) % 100,
  });

  octaveDetune.on('change', (value) => {
    onChange({
      detune: value + coarseDetune.value + fineDetune.value,
    });
  });

  coarseDetune.on('change', (value) => {
    onChange({
      detune: octaveDetune.value + value + fineDetune.value,
    });
  });

  fineDetune.on('change', (value) => {
    onChange({
      detune: octaveDetune.value + coarseDetune.value + value,
    });
  });

  new Slider(`${selector}-phase`, {
    min: -180,
    max: 180,
    step: 1,
    value: phase,
  }).on('change', (value) => {
    onChange({ phase: value });
  });
};

export const createPattern = (selector, { interval, pattern }, onChange) => {
  new Select(`${selector}-pattern`, {
    options: TONE_PATTERN_TYPES,
  }).on('change', ({ value, index }) => {
    onChange({ pattern: value });
  }).value = pattern;

  new Select(`${selector}-interval`, {
    options: TONE_TIME_INTERVALS,
  }).on('change', ({ value, index }) => {
    onChange({ interval: value });
  }).value = Time(interval).toNotation();
};

export const createPiano = (selector, { mode }, onChange) => {
  new Piano(selector, {
    size: [1000, 125],
    mode,
    lowNote: 21,
    highNote: 108,
  }).on('change', ({ note, state }) => {
    onChange(Uint8Array.of(state ? 144 : 128, note, 127));
  });
};

export const createTransport = (selector, { bpm, state }, onChange) => {
  new Slider(`${selector}-bpm`, {
    min: 60,
    max: 220,
    step: 1,
    value: bpm,
  }).on('change', (value) => {
    onChange({ bpm: value });
  });

  new Toggle(`${selector}-state`, {
    state,
  }).on('change', (value) => {
    onChange({ state: value });
  });
};

