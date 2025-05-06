import { FC } from "react";
import { TMarker } from "@/types";
import classes from "./marker.module.css";

const MarkerUI: FC<TMarker> = ({ color, size }) => {
  const classesList = [classes.marker, classes[color], classes[size]]
    .filter(Boolean)
    .join(" ");

  return <span className={classesList} />;
};

export default MarkerUI;
