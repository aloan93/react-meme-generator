import { useState } from "react";

function MemeForm({ setInputs }) {
  const [isUpload, setIsUpload] = useState(false);
  const [file, setFile] = useState(null);

  function toggleInput() {
    isUpload ? setIsUpload(false) : setIsUpload(true);
  }

  function handleFile(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function getInputs(e) {
    e.preventDefault();
    if (!isUpload)
      setInputs([e.target[0].value, e.target[1].value, e.target[2].value]);
    else setInputs([e.target[0].value, e.target[1].value, file]);
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
                <input
                  type="text"
                  name="image-url"
                  placeholder="Image URL"
                  required
                />
              </label>
            </div>
          )}
          {isUpload && (
            <div className="input" id="image-upload">
              <label>
                Upload Image:
                <input
                  onChange={handleFile}
                  type="file"
                  name="image-upload"
                  required
                />
              </label>
            </div>
          )}
        </div>
        <div className="form-button-container">
          <button className="form-buttons">Submit</button>
          <button className="form-buttons" type="reset">
            Clear
          </button>
        </div>
      </form>
    </>
  );
}

export default MemeForm;
