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
    this.randomString = this.randomString.bind(this);
  }

  componentDidMount() {
    this.props.requestTranslations(this.props.match.params.documentId);
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
    let list2 = [this.props.document].concat(this.props.translations);
    return (
      <div className="trans-index-container">
        <div className="carousel-container">
          <div className="carousel-container">
          <Slider {...settings}>
            {
              list2.map((trans, idx) => {
                let link = (
                  <div className="translation-list-link">
                    <Link to={`/documents/${this.props.document.id}/translations/${trans.id}`}>Edit Me</Link>
                  </div>)
                let type = "Translation";
                let height = "78%";
                if (idx === 0) {
                  link = "";
                  type = "Original Text";
                  height = "85%"
                }
                return (
                  <div key={this.randomString()} className="translation-list-container">
                    <div key={this.randomString()} className="translation-list">
                      <div className="translation-list-title">
                        {type}: {trans.title}
                      </div>
                      <div className="translation-list-language">
                        Language: {trans.language}
                      </div>
                      { link }
                      <div className="translation-list-body" style={{height: height}}>
                         {trans.body}
                      </div>
                    </div>
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
