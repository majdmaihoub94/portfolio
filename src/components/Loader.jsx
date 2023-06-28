import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          {progress.toFixed(2)}% loading...
        </p>
      </span>
    </Html>
  );
};

export default Loader;
