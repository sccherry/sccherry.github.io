import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default createClass({
  componentDidMount() {
    const { document, entry } = this.props;
    const script = entry.getIn(['data', 'js', 'code']);
    const el = document.createElement("script");

    el.type = 'module';
    el.innerHTML = script;

    document.body.appendChild(el);
  },
  render() {
    const { entry } = this.props;
    const markup = entry.getIn(['data', 'html', 'code']);
    const style = entry.getIn(['data', 'css', 'code']);

    const createMarkup = () => {
      return {
        __html: markup,
      };
    };

    return html`
      ${style
        ? html`<style>
            ${style}
          </style>`
        : undefined}
      <div dangerouslySetInnerHTML=${createMarkup()}></div>
    `;
  },
});
