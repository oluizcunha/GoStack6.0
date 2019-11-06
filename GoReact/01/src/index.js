import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";
class App extends Component {
  state = {
    contador: 1
  };

  // Executado na criação do componente
  componentDidMount() {
    //
  }

  //Retorna true ou false, autorizando a atualização do componente(controle de performace)
  shouldComponentUpdate(nextProps, nextState) {
    //
  }

  // Executa apos atualização de componente
  componentDidUpdate(prevProps, prevState) {
    //
  }

  // Executado quando é destruido o componente
  componentWillUnmount() {
    //
  }

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
