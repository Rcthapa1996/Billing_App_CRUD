// Constants
import Input from "./Input";

// Hooks
import useInput from "./hooks/useInput";
import TutorialEditOrAddWrapper from "./TutorialEditOrAddWrapper";

const TutorialEdit = () => {
  const { message, currentTutorial, handleUpdate, handleChange } = useInput();

  return (
    <TutorialEditOrAddWrapper>
      <h1>{message}</h1>
      <Input currentTutorial={currentTutorial} handleChange={handleChange} />
      <button onClick={handleUpdate}>Update Tutorial</button>
    </TutorialEditOrAddWrapper>
  );
};

export default TutorialEdit;
