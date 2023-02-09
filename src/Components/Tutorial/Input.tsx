const Input = ({ currentTutorial, handleChange }) => {
  return (
    <>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={currentTutorial.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={currentTutorial.description}
          onChange={handleChange}
          name="description"
          placeholder="Description"
        />
      </div>
      <div>
        <label>Published</label>
        <select
          value={currentTutorial.published ? "yes" : "no"}
          onChange={handleChange}
          name="published"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </>
  );
};

export default Input;
