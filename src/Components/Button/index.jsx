import style from "./style.module.css";

const Button = (props) => {
  return <button className={style.button}>{props.btnText}</button>;
};

export default Button;
