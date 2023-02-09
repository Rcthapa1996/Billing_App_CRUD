// Hook
import useInput from "./hooks/useInput";

// Components
import Input from "./Input";
import TutorialEditOrAddWrapper from "./TutorialEditOrAddWrapper";

const AddTutorial = () => {
  const { message, currentTutorial, handleAdd, handleChange } = useInput();
  return (
    <TutorialEditOrAddWrapper>
      <h1>{message}</h1>
      <Input currentTutorial={currentTutorial} handleChange={handleChange} />
      <button onClick={handleAdd}>Add Tutorial</button>
    </TutorialEditOrAddWrapper>
  );
};

export default AddTutorial;
