import React from "react";

export const PageTemplate = ({ header, footer, children }) => {
  return (
    <div className="main">
      <div>
        <header>{header}</header>
        {children}
        <footer>{footer}</footer>
      </div>
    </div>
  );
};
