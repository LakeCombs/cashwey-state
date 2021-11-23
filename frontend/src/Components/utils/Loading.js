import React from "react";
import loaded from "../Images/loading.gif";

const Loading = ({ height, width }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loaded} alt="" style={{ height, width }} />
    </div>
  );
};

export default Loading;
