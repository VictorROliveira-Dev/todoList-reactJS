import Botao from "../Botao";
import Relogio from "./Relogio";

import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Tarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

type Props = {
  selecionado: Tarefa | undefined;
  finalizarTarefa: () => void
};

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();
  //Sempre que houver alteração no objeto passando dentro do array, o "useEffect" realiza a função desejada.
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  //Função recurssiva para fazer a contagem da tarefa:
  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie a tarefa!</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)} texto="Começar" />
    </div>
  );
}
