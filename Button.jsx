import css from "./Button.module.scss";

const Button = ({ children }) => {
  return <button className={css.root}>{children}</button>;
};

export default Button;
