import React from 'react';

class TranslationsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestTranslations("1");
  }

  handleClick(e) {
    e.preventDefault();
    this.props.requestTranslations();
    console.log(this.props.translations);
  }

  render() {
    return (
      <div>
        {
          this.props.translations.map((trans) => {
            return (<li key={trans.id}>
                        {trans.title} ({trans.language}): {trans.body}</li>)})
        }
      </div>
    );
  }
}

export default TranslationsIndex;
