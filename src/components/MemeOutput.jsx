import { useRef, useEffect } from "react";

function MemeOutput({ topText, bottomText, urlText }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = urlText;

    image.onload = () => {
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

  return <canvas ref={canvasRef}></canvas>;
}

export default MemeOutput;
