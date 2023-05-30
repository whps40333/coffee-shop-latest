import styles from "../../../../public/styles/UI/Buttons/ClrButton.module.scss";
const Clrbutton = (props) => {
  return (
    <button
      className={` ${props.className} ${styles.button}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Clrbutton;
