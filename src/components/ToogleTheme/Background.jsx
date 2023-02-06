import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black transition-all">
      {children}
    </div>
  );
};

export default Background;
