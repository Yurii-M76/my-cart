"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import classes from "./back-button.module.css";

type TBackButtonUI = {
  label: string;
};

const BackButtonUI: FC<TBackButtonUI> = ({ label }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className={classes.backButton}
      onClick={() => router.back()}
    >
      {label}
    </button>
  );
};

export default BackButtonUI;
