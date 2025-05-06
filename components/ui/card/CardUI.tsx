"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { MarkerUI } from "../marker";
import { TCard } from "@/types";
import classes from "./card.module.css";

const CardUI: FC<TCard> = ({ label, icon, count, accent, path }) => {
  const router = useRouter();

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
          <MarkerUI color={accent ? "accent" : "blue"} size="sm" />
        </div>
      )}
    </div>
  );
};

export default CardUI;
