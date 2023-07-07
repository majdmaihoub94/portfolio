import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  FLoat,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return <div>Ball</div>;
};

export default Ball;
