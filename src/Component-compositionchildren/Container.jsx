import React, { useState } from "react";

function Container({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const containerStyle = {
    backgroundColor: "white",
    border: "2px solid red",
    padding: "20px",
    borderRadius: "5px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    cursor: "pointer", 
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle} onClick={toggleContent}>
        {title}
      </div>
      {isOpen && <div>{children}</div>} 
    </div>
  );
}

export default Container;
