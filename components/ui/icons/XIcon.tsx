import { TIcon } from "@/types";

const XIconUI = ({ width, height, fill, stroke, strokeWidth }: TIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "100%"}
      height={height || "100%"}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      stroke={fill ? fill : stroke || "currentColor"}
      strokeWidth={strokeWidth || "1.2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

export default XIconUI;
