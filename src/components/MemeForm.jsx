function MemeForm({ setInputs }) {
  function getInputs(e) {
    e.preventDefault();
    setInputs([e.target[0].value, e.target[1].value, e.target[2].value]);
  }

  return (
    <form onSubmit={getInputs}>
      <div className="input-container">
        <div className="input" id="top-text">
          <label htmlFor="top-text">Top Text:</label>
          <input type="text" name="top-text" placeholder="Top Text" />
        </div>
        <div className="input" id="bottom-text">
          <label htmlFor="bottom-text">Bottom Text:</label>
          <input type="text" name="bottom-text" placeholder="Bottom Text" />
        </div>
        <div className="input" id="url-text">
          <label htmlFor="image-url">Image URL:</label>
          <input type="text" name="image-url" placeholder="Image URL" />
        </div>
      </div>
      <div className="form-buttons">
        <button>Submit</button>
        <button type="reset">Clear</button>
      </div>
    </form>
  );
}

export default MemeForm;
