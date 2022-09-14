import React from "react";

export const Text = ({ className, count, children, type }) => {
  if (type === "h1") {
    return (
      <h1 className={className}>
        {count} {children}
      </h1>
    );
  }

  if (type === "h2") {
    return (
      <h2 className={className}>
        {count} {children}
      </h2>
    );
  }
  if (type === "h3") {
    return (
      <h3 className={className}>
        {count} {children}
      </h3>
    );
  }
  if (type === "h4") {
    return (
      <h4 className={className}>
        {count} {children}
      </h4>
    );
  }
  if (type === "h5") {
    return (
      <h5 className={className}>
        {count} {children}
      </h5>
    );
  }
  if (type === "h6") {
    return (
      <h6 className={className}>
        {count} {children}
      </h6>
    );
  }




  return (
    <p className={className}>
      {count} {children}
    </p>
  );
};

const DefaultExport = () => {
  return <>Default Export</>;
};

export default DefaultExport;
