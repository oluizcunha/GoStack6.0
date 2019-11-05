import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

class App extends Component {
  handleClick() {
    alert("botão clicado");
  }

  render() {
    return (
      <Fragment>
        <h1>Oi Brasil</h1>
        {/* /Mostrando warning no console pois foi definido o proptypes requerido */}
        <Button />

        {/* Criou uma arrow funcion pra retornar um alerta */}
        <Button
          onClick={() => {
            alert("botao 1");
          }}
        />

        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
