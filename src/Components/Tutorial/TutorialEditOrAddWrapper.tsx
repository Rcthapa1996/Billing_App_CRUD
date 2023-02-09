// Styles
import style from "./TutorialEditStyles.module.scss";

const TutorialEditOrAddWrapper = ({ children }) => {
  return <div className={style["input-container"]}>{children}</div>;
};

export default TutorialEditOrAddWrapper;
