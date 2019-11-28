import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Remarkable from "remarkable";

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.changeIt = this.changeIt.bind(this);
    this.state = {
      value: "=> Enter the *Markdown* here <="
    };
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
  changeIt(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={this.changeIt}
            defaultValue={this.state.value}
          />
        </div>
        <div className="output">
          <h3>Markdown</h3>
          <div
            dangerouslySetInnerHTML={this.getRawMarkup()}
            className="output-text"
          ></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById("root"));
