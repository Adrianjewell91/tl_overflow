import React from "react";
import merge from "lodash/merge";
import axios from "axios";

class DocumentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      from: "",
      to: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field) {
    return e => {
      let newState = merge({}, this.state, { [field]: e.target.value });
      this.setState(newState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createDocument({title: this.state.title,
                       body: this.state.body,
                       language: `${this.state.from}-${this.state.to}`})
      .then(resFromCreate => {
        axios
          .post(
            `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171012T140121Z.b998082e631b287c.a28e1ccdc8860c80b45b5019fccbdb8bba60497a&text=${this
              .state.body}&lang=${this.state.from}-${this.state.to}`
          )
          .then(res => {
            this.props.createTranslation(resFromCreate.a_document.id, {
              title: `${resFromCreate.a_document.title}_TR`,
              body: `${res.data.text[0]}`,
              language: `${resFromCreate.a_document.language}`
            });
          })
          .then(() => {
            this.props.history.push(`/documents/${resFromCreate.a_document.id}`);
          });
      })

      .then(() => {
        let newState = merge({}, this.state, {
          title: "",
          body: "",
          from: "",
          to: ""
        });
        this.setState(newState);
      });
  }

  render() {
    const Langs = {
      Azerbaijan: "az",Malayalam: "ml",Albanian: "sq", Maltese: "mt", Amharic: "am", Macedonian: "mk", English: "en", Maori: "mi", Arabic: "ar", Marathi: "mr", Armenian: "hy", Mari: "mhr", Afrikaans: "af", Mongolian: "mn", Basque: "eu", German: "de", Bashkir: "ba", Nepali: "ne", Belarusian: "be", Norwegian: "no", Bengali: "bn", Punjabi: "pa", Burmese: "my", Papiamento: "pap", Bulgarian: "bg", Persian: "fa", Bosnian: "bs", Polish: "pl", Welsh: "cy", Portuguese: "pt", Hungarian: "hu", Romanian: "ro", Vietnamese: "vi", Russian: "ru", Haitian: "ht", Cebuano: "ceb", Galician: "gl", Serbian: "sr", Dutch: "nl", Sinhala: "si", Slovakian: "sk", Greek: "el", Slovenian: "sl", Georgian: "ka", Swahili: "sw", Gujarati: "gu", Sundanese: "su", Danish: "da", Tajik: "tg", Hebrew: "he", Thai: "th", Yiddish: "yi", Tagalog: "tl", Indonesian: "id", Tamil: "ta", Irish: "ga", Tatar: "tt", Italian: "it", Telugu: "te",Icelandic: "is",Turkish: "tr",Spanish: "es",Udmurt: "udm",Kazakh: "kk",Uzbek: "uz",Kannada: "kn",Ukrainian: "uk",Catalan: "ca",Urdu: "ur",Kyrgyz: "ky",Finnish: "fi",Chinese: "zh",French: "fr",Korean: "ko",Hindi: "hi",Xhosa: "xh",Croatian: "hr",Khmer: "km",Czech: "cs",Laotian: "lo",Swedish: "sv",Latin: "la",Scottish: "gd",Latvian: "lv",Estonian: "et",Lithuanian: "lt",Esperanto: "eo",Luxembourgish: "lb",Javanese: "jv",Malagasy: "mg",Japanese: "ja",Malay: "ms"
    };

    const LangsKeys = Object.keys(Langs).sort()

    return (
      <div className="new-doc-form-container">

        <form onSubmit={this.handleSubmit} className="new-doc-form-box">
          <h1 className="formHeader">New Document</h1>
            <div className="new-doc-form">

              <label>Title
                <br/>
                <input
                  className="docForm-title"
                  type="text"
                  onChange={this.updateField("title")}
                  value={this.state.title}
                  />
              </label>


              <label>Document Body
                <br/>
                <textarea
                  className="docForm-body"
                  rows="20"
                  cols="100"
                  type="text"
                  onChange={this.updateField("body")}
                  value={this.state.body}
                  />
              </label>

              <div className="docForm-langOptions">
                <select onChange={this.updateField("from")} >
                  <option value="Select Language" disabled="true" selected="true">
                    From
                  </option>
                  {LangsKeys.map(lang => (
                    <option value={Langs[lang]}>{lang}</option>
                  ))}
                </select>

                <select onChange={this.updateField("to")} >
                  <option value="Select Language" disabled="true" selected="true">
                    To
                  </option>
                  {LangsKeys.map(lang => (
                    <option value={Langs[lang]}>{lang}</option>
                  ))}
                </select>
              </div>
              <br />

              <div className="docForm-submit" >
                <input type="submit" value="Create Document" />
              </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DocumentForm;
