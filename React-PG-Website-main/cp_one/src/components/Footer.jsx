import React from "react";

const Footer = () => {
  return (
    <footer
      className="container-fluid text-center text-white py-3"
      style={{
        background: "#4A90B2",
        position: "relative",
        bottom: 0,
        width: "100%",
        marginTop: "50px",
      }}
    >
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Vinayaka PG | Designed with ❤️ by{" "}
        <strong>SKAPTRON DEVELOPERS</strong>
      </p>
    </footer>
  );
};

export default Footer;
