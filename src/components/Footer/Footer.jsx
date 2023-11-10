import React from "react";
import footer from "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const myName = "Michael Ngige";
  return (
    <div>
      <footer id="footer">
        <p>     
          &copy; {myName} {currentYear} . All rights reserved.
        </p>
      </footer>
    </div>
  );
}
