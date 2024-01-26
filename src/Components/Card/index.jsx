import Button from "../Button";
import style from "./styles.module.css";

function Conteudo({ color, title, description, albumImg }) {
  return (
    <div style={{ backgroundColor: color }} className={style.container}>
      <img className={style.img} src={albumImg} alt={title} />
      <div className={style.contentText}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button btnText="Comprar agora" />
      </div>
    </div>
  );
}

export default Conteudo;
