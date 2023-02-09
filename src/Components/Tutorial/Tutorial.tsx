import { Link } from "react-router-dom";

// Types
import { TableDataType } from "../../shared/TableTypes";

const Tutorial = ({ tutorial }: { tutorial: TableDataType }) => {
  const { id, title, description, published } = tutorial;

  return (
    <>
      {tutorial.id ? (
        <div>
          <h1>Tutorial Details</h1>
          <hr />
          <h1>ID: {id}</h1>
          <h1>Tutorial Name: {title}</h1>
          <h1>Description: {description}</h1>
          <h1>Published: {published ? "Yes" : "No"}</h1>
          <Link to={`/tutorials/${id}`}>Edit</Link>
        </div>
      ) : (
        <h1>No Tutorials is Selected</h1>
      )}
    </>
  );
};

export default Tutorial;
