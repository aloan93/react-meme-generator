import MemeForm from "./MemeForm";
import MemeOutput from "./MemeOutput";
import { useState } from "react";

function MemeGenerator() {
  const [inputs, setInputs] = useState([]);

  return (
    <>
      <main>
        <MemeForm setInputs={setInputs} />
        <MemeOutput
          topText={inputs[0]}
          bottomText={inputs[1]}
          suppliedImage={inputs[2]}
          setInputs={setInputs}
        />
      </main>
    </>
  );
}

export default MemeGenerator;
