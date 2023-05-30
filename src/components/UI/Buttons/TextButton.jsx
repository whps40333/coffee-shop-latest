import styles from "../../../../public/styles/UI/Buttons/TextButton.module.scss";

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
