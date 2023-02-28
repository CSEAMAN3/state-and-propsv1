import { useState } from "react";
import "./Child.css";
import boy from "../Images/boy.jpg";

export default function Child({ name, surname }) {
  // new state variable
  //     state variable    mutation function              initial value
  const [patsOnBillysHead, setPatsOnBillysHead] = useState(0);

  function handlePat() {
    setPatsOnBillysHead(patsOnBillysHead + 1);
  }

  return (
    <div>
      <h2>
        The boys name is {name} {surname}
      </h2>
      <img src={boy} alt="Billy smiling" onClick={handlePat} />
      <p>Number of pats on his head 👋: {patsOnBillysHead}</p>
    </div>
  );
}
