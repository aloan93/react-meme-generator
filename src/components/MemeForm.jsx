function MemeForm({ setInputs }) {
  function getInputs(e) {
    e.preventDefault();
    setInputs([e.target[0].value, e.target[1].value, e.target[2].value]);
  }

  return (
    <form onSubmit={getInputs}>
      <label htmlFor="top-text">Top Text:</label>
      <input type="text" name="top-text" placeholder="Top Text" />
      <label htmlFor="bottom-text">Bottom Text:</label>
      <input type="text" name="bottom-text" placeholder="Bottom Text" />
      <label htmlFor="image-url">Image URL:</label>
      <input type="text" name="image-url" placeholder="Image URL" />
      <button>Submit</button>
      <button type="reset">Clear</button>
    </form>
  );
}

export default MemeForm;
