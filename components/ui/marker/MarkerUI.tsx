import { FC } from "react";
import { TMarker } from "@/types";
import classes from "./marker.module.css";

const MarkerUI: FC<TMarker> = ({ color, size, style }) => {
  const classesList = [classes.marker, classes[color], classes[size]]
    .filter(Boolean)
    .join(" ");

  return <span className={classesList} style={style} />;
};

export default MarkerUI;
