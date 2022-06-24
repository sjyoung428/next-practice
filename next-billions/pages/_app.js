import { useState } from "react";
import Nav from "../components/Nav";
import { Global } from "../styles/global";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState();
  const globalStyle = Global(mode);
  return (
    <>
      <Nav setMode={setMode} />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <style jsx global>
        {`
          ${globalStyle}
          .container {
            width: 100%;
            padding-top: 20px;
          }
        `}
      </style>
    </>
  );
}
