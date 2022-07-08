import React from "react";

interface VideoProps {
  url: string;
}

const Video = ({ url }: VideoProps) => {
  return (
    <>
      <video src={url} autoPlay loop playsInline height={300} width={400} />
      <style jsx>{`
        video {
          border: solid 1px white;
          max-height: 100%;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Video;
