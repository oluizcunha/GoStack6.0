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
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

class App extends Component {
  state = {
    contador: 1
  };

  //Se não utilizarmos uma arrow funcion, o this está referenciando a função. Com isso ele não encontra os componentes da classe mae
  handleClick = () => {
    //Não é possivel alterar valor do estado, apenas pode sobrepor com  afunção setState (replace)
    this.setState({ contador: this.state.contador + 1 });

    //A alteração do state entra em fila e demora algum tempo para ser processada, por isso ele exibe o valor antigo.
    console.log("Print antes de processar " + this.state.contador);

    //Umas das formas para que ele execute obrigatoriamente depois do processamento de alterar o stado é
    //criando uma função de callback:

    this.setState({ contador: this.state.contador + 1 }, () => {
      console.log("Print depois de processar " + this.state.contador);
    });

    // Para acessar o state que está presente na fila, deve-se atribuir em uma função (fazendo alteração instantanea)
    this.setState(state => ({ contador: this.state.contador + 1 }));
    console.log("Print com alteração instantanea" + contador);
  };
  // Quando o state é alterando, o render é executando. Fazendo com que atualize os dados da pagina
  render() {
    return (
      <Fragment>
        <h1>Eai</h1>
        <h2>{this.state.contador}</h2>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
