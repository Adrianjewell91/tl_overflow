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
    this.props.createDocument(this.state)

      .then((resFromCreate) => {
        axios.post(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171012T140121Z.b998082e631b287c.a28e1ccdc8860c80b45b5019fccbdb8bba60497a&text=${this.state.body}&lang=${this.state.from}-${this.state.to}`)
            .then((res) => {
              this.props.createTranslation(resFromCreate.a_document.id, {
                title: `${resFromCreate.a_document.title}_TR`,
                body: `${res.data.text[0]}`,
                language: `${res.data.lang}`
              })
            })
      })

      .then(() => {
        let newState = merge({}, this.state, {
          title: "",
          body: "",
          from: "",
          to:""
        });
        this.setState(newState);
      });
  }

  render() {
    return (
      <div>
        <h1>New Document</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            onChange={this.updateField("title")}
            value={this.state.title}
          />
          <br />

          <textarea
            type="text"
            placeholder="What do you want to translate?"
            onChange={this.updateField("body")}
            value={this.state.body}
          />
          <br />

          <select onChange={this.updateField("from")}>
            <option value="Select Language" disabled="true" selected="true">From</option>
            <option value="en">en</option>
            <option value="zh">zh</option>
            <option value="es">es</option>
          </select>

          <select onChange={this.updateField("to")}>
            <option value="Select Language" disabled="true" selected="true">To</option>
            <option value="en">en</option>
            <option value="zh">zh</option>
            <option value="es">es</option>
          </select>
          <br />

          <input type="submit" value="Create New Document" />

        </form>

      </div>
    );
  }
}

export default DocumentForm;
