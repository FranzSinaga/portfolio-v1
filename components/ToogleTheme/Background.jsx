import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-paper text-ink2 transition-colors duration-200">
      {children}
    </div>
  );
};

export default Background;
