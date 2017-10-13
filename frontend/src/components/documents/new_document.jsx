import React from "react";

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

  updateNewDocField(){
    return e => {
      let newState = merge({}, this.state, {
        document: { body: e.target.value }
      });
      // this.setState(newState);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDocument(this.state.document).then(() => {
      let newState = merge({}, this.state, {
        document: { body: "" }
        this.setState(newState);
      })
    })
    // this.props.createDocument({
    //   title: "test document",
    //   body: "Test",
    //   language: "en"
    // });
  }

  render() {
    return (
      <div>
        <h1>New Document</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="what do you want to translate?"
              onChange={this.updateNewDocField()}
              value={this.state.document.body}
            />
            <input type="submit" value="Create New Document" />
          </form>
      </div>
    );
  }
}
//   <textarea
//     placeholder="what do you want to translate"
//     onChange={this.updateNewDocField()}
//     value={this.state.document.body}
//   />
// <button onClick={this.handleSubmit}>Create A new document</button>

export default DocumentForm;
