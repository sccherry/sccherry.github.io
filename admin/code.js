import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default createClass({
  componentDidMount() {
    this.renderScript();
  },
  componentDidUpdate() {
    this.renderScript();
  },
  renderScript() {
    const { document, entry } = this.props;
    const script = entry.getIn(['data', 'js', 'code']);

    const currentEl = document.querySelector('script');

    if (currentEl) {
      currentEl.remove();
    }

    if (script) {
      const el = document.createElement('script');

      el.type = 'module';
      el.innerHTML = script;

      document.body.appendChild(el);
    }
  },
  render() {
    const { entry } = this.props;
    const markup = entry.getIn(['data', 'html', 'code']);
    const style = entry.getIn(['data', 'css', 'code']);

    const createMarkup = () => {
      let str = '';

      if (style) {
        str += `<style>${style}</style>`;
      }

      if (markup) {
        str += markup;
      }

      return {
        __html: str,
      };
    };

    return html` <div dangerouslySetInnerHTML=${createMarkup()}></div> `;
  },
});
