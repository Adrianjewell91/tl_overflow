import React, { Component } from "react";

class DocumentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      language: ""
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
    this.props.createDocument(this.state).then(() => {
      let newState = merge({}, this.state, {
        title: "",
        body: "",
        language: ""
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

          <input
            type="text"
            placeholder="What do you want to translate?"
            onChange={this.updateField("body")}
            value={this.state.body}
          />

          <input
            type="text"
            placeholder="Lang1 into Lang2"
            onChange={this.updateField("language")}
            value={this.state.language}
          />

          <input type="submit" value="Create New Document" />
        </form>
      </div>
    );
  }
}

export default DocumentForm;
