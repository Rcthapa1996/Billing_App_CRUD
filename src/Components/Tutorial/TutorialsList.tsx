// Styles
import TutorialsListStyles from "./TutorialsListStyles.module.scss";

// Components
import Table from "../../shared/Table";

// Types
import Tutorial from "./Tutorial";

// Hooks
import useTutorials from "./hooks/useTutorials";
import TableConfig from "../../shared/config";

const TutorialsList = () => {
  const {
    getDataHandler,
    encounterError,
    // searchText,
    // setSearchText,
    findByTitle,
    data,
    isLoading,
    currentTutorial
  } = useTutorials();

  return (
    <div className={TutorialsListStyles["main"]}>
      <button onClick={getDataHandler}>Load Data</button>
      <hr />
      {encounterError ? (
        <h1>Error</h1>
      ) : (
        <>
          <input
            placeholder="Search By Title"
            // value={searchText}
            onChange={(e) => findByTitle(e.target.value)}
            type="search"
          />
          {/* <button onClick={findByTitle}>Search</button> */}
          <Table data={data} config={TableConfig} isLoading={isLoading} />
          <hr />
          <Tutorial tutorial={currentTutorial} />
        </>
      )}
    </div>
  );
};

export default TutorialsList;
