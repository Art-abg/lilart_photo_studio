import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto">
        <p>Copyright &copy; 2021 LilArt</p>
        <div className="flex">
          <a
            href="https://www.facebook.com/LilArtPhotography"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook fa-2x mr-2"></i>
          </a>
          <a
            href="https://www.instagram.com/lilartphotography/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram fa-2x mr-2"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
