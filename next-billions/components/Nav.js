import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { getLocalStorage } from "../utils";

const Nav = ({ setMode }) => {
  const [modeState, setModeState] = useLocalStorage("mode", "dark");

  useEffect(() => {
    setMode(getLocalStorage("mode"));
  }, [setMode, modeState]);

  const onToggleClick = () => {
    if (modeState === "dark") {
      setModeState("light");
    } else if (modeState === "light") {
      setModeState("dark");
    }
  };
  return (
    <>
      <div>
        <h1>50 Rich People in the World</h1>
        <span onClick={onToggleClick}>
          {modeState === "dark" ? "Light" : "dark"}
        </span>
      </div>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          padding: 15px 5px;
          justify-content: center;
        }
        h1 {
          font-size: 30px;
        }
        span {
          position: absolute;
          right: 5%;
          height: 50px;
          width: 50px;
          border: 1px solid;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        span:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Nav;
