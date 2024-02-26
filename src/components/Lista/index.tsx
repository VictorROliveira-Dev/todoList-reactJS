import { Tarefa } from "../../types/tarefas";
import style from "./Lista.module.scss";
import Item from "./item";

type Props = {
  tarefas: Tarefa[],
  selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas do dia:</h2>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
