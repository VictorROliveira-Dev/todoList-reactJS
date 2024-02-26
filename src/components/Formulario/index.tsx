import React from "react";
//Lib para gerar id's baseado em uma função:
import { v4 as uuidv4 } from "uuid";

import Botao from "../Botao";

import style from "./Formulario.module.scss";
import { Tarefa } from "../../types/tarefas";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}> {
  //Por ser uma classe ReactComponent, já vem com alguns atributos sem precisar serem declarados, o "useState" é um deles.
  state = {
    nomeTarefa: "",
    tempo: "00:00",
  };
  //Por ser uma classe ReactComponent, não precisa declarar que é uma função.
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    this.setState({
      nomeTarefa: "",
      tempo: "00:00",
    });
  }

  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione a sua tarefa:</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.nomeTarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, nomeTarefa: evento.target.value })
            }
            placeholder="Digite o nome da tarefa..."
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo">Defina o tempo:</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Botao type="submit" texto="Adicionar Tarefa" />
      </form>
    );
  }
}

export default Formulario;
