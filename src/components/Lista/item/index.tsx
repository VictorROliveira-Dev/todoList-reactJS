import { Tarefa } from "../../../types/tarefas";
import style from "../item/Item.module.scss";

interface Props extends Tarefa {
  selecionaTarefa: (tarefaSelecionada: Tarefa) => void;
}

export default function Item({
  nomeTarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
      onClick={() =>
        !completado && selecionaTarefa({ nomeTarefa, tempo, selecionado, completado, id })
      }
    >
      <h3>{nomeTarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  );
}
