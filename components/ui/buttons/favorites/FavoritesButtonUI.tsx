"use client";
import { FC } from "react";
import classes from "./favorites.module.css";

type TFavoritesButtonUI = {
  active: boolean;
  onClick: () => void;
};

const FavoritesButtonUI: FC<TFavoritesButtonUI> = ({ active, onClick }) => {
  const classList = [classes.favorites, active ? classes.active : null]
    .filter(Boolean)
    .join(" ");

  return <button type="button" onClick={onClick} className={classList} />;
};

export default FavoritesButtonUI;
