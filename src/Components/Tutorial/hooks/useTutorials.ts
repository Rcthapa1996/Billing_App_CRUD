import { useCallback, useEffect, useState } from "react";

// Hooks
import { useNavigate } from "react-router-dom";

// Services
import TutorialService from "../../../services/TutorialService";

// Types
import { TableDataType } from "../../../shared/TableTypes";

// Constants
import { InitialisedTutorial } from "../Constants";

const useTutorials = () => {
  const navigator = useNavigate();
  const [data, setData] = useState<TableDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [encounterError, setEncounterError] = useState<boolean>(false);
  const [currentTutorial, setCurrentTutorial] = useState<TableDataType>(
    InitialisedTutorial
  );

  const getData = useCallback(() => {
    TutorialService.getAll()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(() => setEncounterError(true));
  }, []);

  useEffect(() => getData(), []);

  const clearData = () => {
    setIsLoading(true);
    setCurrentTutorial(InitialisedTutorial);
  };

  const getDataHandler = useCallback(() => {
    clearData();
    getData();
  }, []);

  const rowClickHandler = useCallback((id) => {
    navigator(`/tutorials/${id}`);
    // setTimeout(() => {
    // }, 3000);
  }, []);

  const findByTitle = (searchText) => {
    clearData();
    if (searchText === "") getDataHandler();
    else
      TutorialService.findByTitle(searchText)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch(() => setEncounterError(true));
  };

  return {
    getDataHandler,
    encounterError,
    // searchText,
    // setSearchText,
    findByTitle,
    data,
    isLoading,
    setCurrentTutorial,
    rowClickHandler,
    currentTutorial
  };
};
export default useTutorials;
