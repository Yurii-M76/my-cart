"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { TCard } from "@/types";
import classes from "./card.module.css";

const CardUI: FC<TCard> = ({ label, icon, count, accent, path }) => {
  const router = useRouter();

  const markerClasses = [classes.marker, accent ? classes.accent : null]
    .filter(Boolean)
    .join(" ");

  const handleClick = () => {
    router.push(path);
  };

  return (
    <div className={classes.card} onClick={handleClick}>
      <div
        className={classes.icon}
        style={{ backgroundImage: `url(${icon})` }}
      ></div>
      <div className={classes.label}>{label}</div>
      {count > 0 && (
        <div className={classes.count}>
          {count}
          <span className={markerClasses}></span>
        </div>
      )}
    </div>
  );
};

export default CardUI;
