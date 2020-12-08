
import { h, Component, render } from 'https://cdn.skypack.dev/preact';
import htm from 'https://cdn.skypack.dev/htm';
import { useState } from 'https://cdn.skypack.dev/preact/hooks';

const html = htm.bind(h);

const Input = ({ label, id, ...props }) => html`
  <div class="input">
    <label for="${id}">${label}</label>
    <input id="${id}" ...${props} />
  </div>
`;

const App = () => {
  const [bpm, setBpm] = useState(120);
  const [beats, setBeats] = useState(4);
  const [duration, setDuration] = useState(2.5);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const measures = bpm / beats * duration;

  return html`
    <form onSubmit=${handleSubmit}>
      <${Input} id="bpm" label="BPM" type="number" min="20" max="240" value=${bpm} onInput=${e => setBpm(parseInt(e.target.value, 10))}/>
      <${Input} id="beats" label="Beats per measure" type="number" min="2" max="8" value=${beats} onInput=${e => setBeats(parseInt(e.target.value, 10))}/>
      <${Input} id="duration" label="Duration in minutes" type="number" min="1" max="10" step="0.25" value=${duration} onInput=${e => setDuration(parseInt(e.target.value, 10))}/>
      <output>${measures} measures</output>
    </form>
  `;
};

render(
  html`
    <${App} />
  `,
  document.querySelector('#app')
);

