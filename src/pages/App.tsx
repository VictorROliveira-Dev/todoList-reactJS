import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
//Estilizando com CSS Modules, para resolver problemas de sobreposição de classes.
//Usa-se importando a lib "npm install -D typescript-plugin-css-modules", depois, configura-se o "tsconfig".
import style from "./App.module.scss";
import Cronometro from "../components/Cronometro";
import { useState } from "react";
import { Tarefa } from "../types/tarefas";

function App() {
  //Definindo que o type "Tarefa" pode receber um array de tarefas, ou um array vazio.
  const [tarefas, setTarefas] = useState<Tarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Tarefa>();

  function selecionaTarefa(tarefaSelecionada: Tarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
