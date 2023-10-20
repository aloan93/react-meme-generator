import { useState } from "react";

function MemeForm({ setInputs }) {
  const [isUpload, setIsUpload] = useState(false);

  function toggleInput() {
    isUpload ? setIsUpload(false) : setIsUpload(true);
  }

  function getInputs(e) {
    e.preventDefault();
    setInputs([e.target[0].value, e.target[1].value, e.target[2].value]);
  }

  return (
    <>
      <form onChange={toggleInput} className="image-method">
        <fieldset>
          <legend>Select how to supply image</legend>
          <div className="radio-label">
            <label>
              Image URL
              <input
                type="radio"
                name="image-method"
                value="Image URL"
                defaultChecked
              />
            </label>
          </div>
          <div className="radio-label">
            <label>
              Upload Image
              <input type="radio" name="image-method" value="Upload Image" />
            </label>
          </div>
        </fieldset>
      </form>
      <form onSubmit={getInputs}>
        <div className="input-container" id="input-container">
          <div className="input" id="top-text">
            <label>
              Top Text:
              <input type="text" name="top-text" placeholder="Top Text" />
            </label>
          </div>
          <div className="input" id="bottom-text">
            <label>
              Bottom Text:
              <input type="text" name="bottom-text" placeholder="Bottom Text" />
            </label>
          </div>
          {!isUpload && (
            <div className="input" id="url-text">
              <label>
                Image URL:
                <input type="text" name="image-url" placeholder="Image URL" />
              </label>
            </div>
          )}
          {isUpload && (
            <div className="input" id="image-upload">
              <label>
                Upload Image:
                <input type="file" name="image-upload" />
              </label>
            </div>
          )}
        </div>
        <div className="form-buttons">
          <button>Submit</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </>
  );
}

export default MemeForm;
