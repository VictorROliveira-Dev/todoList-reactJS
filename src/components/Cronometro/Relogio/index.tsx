import style from './Relogio.module.scss';

type Props = {
  tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  //Realizando o downleveliteration no tsconfig.json.
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}
