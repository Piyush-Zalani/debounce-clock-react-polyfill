import React from "react";

function Modal() {}

function ModalExample() {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowModal1(true)}>Show Modal 1</button>
      <button onClick={() => setShowModal2(true)}>Show Modal 2</button>
      {showModal1 && <Modal />}
      {showModal2 && <Modal />}
    </>
  );
}

export default ModalExample;
