import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

class TranslationsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      title: "",
      language: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.randomString = this.randomString.bind(this);
  }

  componentDidMount() {
    this.props.requestTranslations(this.props.match.params.documentId);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({text: e.currentTarget.innerHTML})
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    let list2 = [this.props.document].concat(this.props.translations)
    let randKey = Math.random(10000,1000000);
    return (
      <div className="trans-index-container">
        <div className="carousel-container">
          <div className="carousel-container">
          <Slider {...settings}>
            {
              list2.map((trans, idx) => {
                let link = (<Link to={`/documents/${this.props.document.id}/translations/${trans.id}`}>Edit Me</Link>)
                if (idx === 0) {
                  link = "";
                }
                return (
                  <div key={this.randomString()} className="translation-list-container">
                    <div key={this.randomString()} className="translation-list"
                         onClick={this.handleClick}>
                         {trans.title} ({trans.language}): {trans.body}
                    </div>
                    { link }
                  </div>)})
            }
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default TranslationsIndex;
