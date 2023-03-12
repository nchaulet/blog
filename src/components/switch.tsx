import React, { useMemo } from "react";
import { useColorScheme } from "../hooks/use_color_scheme";
import "./switch.css";

function getPreferredColorScheme() {
  return window?.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const DarkModeSvgIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.75em"
    width="1.75em"
    viewBox="0 0 48 48"
    aria-label="Dark mode"
  >
    <path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z" />
  </svg>
);

const LighModeSvgIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.75em"
    width="1.75em"
    viewBox="0 0 48 48"
    aria-label="Ligth mode"
  >
    <path d="M24 31q2.9 0 4.95-2.05Q31 26.9 31 24q0-2.9-2.05-4.95Q26.9 17 24 17q-2.9 0-4.95 2.05Q17 21.1 17 24q0 2.9 2.05 4.95Q21.1 31 24 31Zm0 3q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM2 25.5v-3h8v3Zm36 0v-3h8v3ZM22.5 10V2h3v8Zm0 36v-8h3v8Zm-9.45-30.85L8.1 10.2l2.1-2.1 4.95 4.95ZM37.8 39.9l-4.95-4.95 2.1-2.1 4.95 4.95Zm-2.85-24.75-2.1-2.1L37.8 8.1l2.1 2.1ZM10.2 39.9l-2.1-2.1 4.95-4.95 2.1 2.1ZM24 24Z" />
  </svg>
);

export const Switch: React.FunctionComponent = () => {
  const { colorScheme, toogleColorScheme } = useColorScheme();

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          onClick={toogleColorScheme}
          type="checkbox"
          checked={colorScheme === "dark"}
          title={
            colorScheme === "light"
              ? "switch to dark mode"
              : "switch to light mode"
          }
        />
        <span className="slider round"></span>
      </label>
      &nbsp;{colorScheme === "light" ? LighModeSvgIcon : DarkModeSvgIcon}
    </div>
  );
};
