import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Services
import TutorialsService from "../../../services/TutorialService";

// Constants
import { InitialisedTutorial } from "../Constants";

const useInput = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [currentTutorial, setCurrentTutorial] = useState(InitialisedTutorial);
  const { get, update, create } = TutorialsService;

  useEffect(() => {
    if (!!id)
      get(id)
        .then((res) => setCurrentTutorial(res.data))
        .catch((e) => console.error(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const handleUpdate = () => {
    setMessage("Please Wait Updating Tutorial...");
    update(id, currentTutorial).then((res) => {
      setCurrentTutorial(res.data);
      setTimeout(() => navigate("/tutorials"), 2000);
    });
  };

  const handleAdd = () => {
    setMessage("Please Wait Creating Tutorial...");
    create(currentTutorial)
      .then((res) => {
        setCurrentTutorial(res.data);
        setTimeout(() => navigate("/tutorials"), 2000);
      })
      .catch((e) => console.log("Error in Resp:", e));
    console.log("goting to navigate", currentTutorial);
  };

  return { message, currentTutorial, handleChange, handleAdd, handleUpdate };
};

export default useInput;
