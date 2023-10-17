import { useRef, useEffect, useState } from "react";

function MemeOutput({ topText, bottomText, urlText }) {
  const [isHidden, setIsHidden] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = urlText;
    image.crossOrigin = "annonymous";

    image.onload = () => {
      setIsHidden(false);
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      ctx.textAlign = "center";
      ctx.font = `${canvas.height * 0.15}px impact`;
      ctx.fillStyle = "white";
      ctx.lineWidth = `${canvas.height * 0.005}`;
      ctx.strokeStyle = "black";
      ctx.fillText(topText, canvas.width / 2, canvas.height * 0.15);
      ctx.strokeText(topText, canvas.width / 2, canvas.height * 0.15);
      ctx.fillText(bottomText, canvas.width / 2, canvas.height * 0.95);
      ctx.strokeText(bottomText, canvas.width / 2, canvas.height * 0.95);
    };
  });

  function saveImageToLocal(e) {
    const link = e.currentTarget;
    link.setAttribute("download", "meme.png");
    const image = canvasRef.current.toDataURL("image/png");
    link.setAttribute("href", image);
  }

  return (
    <div id="output">
      <canvas ref={canvasRef}></canvas>
      {!isHidden && (
        <div>
          <a id="download-link" href="download_link" onClick={saveImageToLocal}>
            Download
          </a>
        </div>
      )}
    </div>
  );
}

export default MemeOutput;
