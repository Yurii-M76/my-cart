import { TIcon } from "@/types";

const StarIcon = ({ width, height, fill, stroke, strokeWidth }: TIcon) => {
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
      style={{ flexShrink: 0 }}
    >
      <path d="M17.286 21.09C16.1593 21.0907 14.3967 20.219 11.998 18.475C9.60067 20.2197 7.838 21.0917 6.71 21.091C4.89267 21.091 4.72767 18.8243 6.215 14.291C-0.0443296 9.77433 0.667337 7.516 8.35 7.516H8.426C9.616 3.83867 10.8073 2 12 2C13.19 2 14.3813 3.83867 15.574 7.516H15.65C23.3333 7.516 24.0443 9.774 17.783 14.29C19.2697 18.8247 19.104 21.0913 17.286 21.09Z" />
      <path d="M5 3L21.7452 21.3332" />
    </svg>
  );
};

export default StarIcon;
