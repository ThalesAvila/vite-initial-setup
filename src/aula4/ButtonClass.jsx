import { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  state = {
    contador: 0,
  };

  handleClickButton(e) {
    e.stopPropagation();
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div
        style={{
          padding: 20,
          backgroundColor: "blue",
          color: "#FFF",
        }}
      >
        {this.state.contador}
        <button onClick={this.handleClickButton}>Clique Aqui!</button>
      </div>
    );
  }
}

export default Button;
