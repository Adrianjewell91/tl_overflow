import React from 'react';
import Slider from "react-slick";

class TranslationsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestTranslations(this.props.match.params.documentId);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.requestTranslations();
    console.log(this.props.translations);
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="carousel-container">
      <Slider {...settings}>
        {
          this.props.translations.map((trans) => {
            return (<div key={trans.id}>
                        {trans.title} ({trans.language}): {trans.body}</div>)})
        }
        </Slider>
      </div>
    );
  }
}

export default TranslationsIndex;
