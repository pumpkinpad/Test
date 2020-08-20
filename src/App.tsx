import React from "react";
import "./App.css";
import HoverCorner from "./Components/HoverCorner";

const App = () => {
  const hoverCornerContent: string[] = [
    "bg-blue-700 w-1/3 m-2 p-4 rounded-full",
    "bg-blue-600 w-1/3 m-2 p-4 rounded-full",
    "bg-blue-500 w-1/3 m-2 p-4 rounded-full",
    "bg-blue-400 w-1/3 m-2 p-4 rounded-full",
  ];
  const change;
  const handleMouseEnter = (e: any) => {
    e.target.className = "bg-red-700 w-1/2 p-10 rounded-full";
  };

  const handleMouseLeave = (e: any) => {
    e.target.className = "bg-blue-400 w-1/3 m-2 p-4 rounded-full";
  };
  return (
    <div className="flex justify-between content-between flex-wrap h-screen">
      {hoverCornerContent.map((hoverCornerStyle: string, key: number) => {
        return (
          <HoverCorner
            onMouseLeave={(e: any) => handleMouseLeave(e)}
            onMouseEnter={(e: any) => handleMouseEnter(e)}
            key={key}
            id={`Corner${key}`}
            className={hoverCornerStyle}
            content={`Corner${key}`}
          />
        );
      })}
    </div>
  );
};

export default App;
