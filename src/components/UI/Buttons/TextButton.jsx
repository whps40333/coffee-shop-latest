import styles from "../../../../public/styles/UI/TextButton.module.scss";

const TextButton = (props) => {
  return (
    <button
      className={`${props.className}${styles.button}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default TextButton;
