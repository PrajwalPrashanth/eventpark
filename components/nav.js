import React from "react";
import cn from "classnames";

const Nav = ({ className, aboutRef, galleryRef, contactRef, scrollToView }) => (
  <div
    className={cn(
      "flex w-11/12 mx-auto space-x-3 items-center justify-around",
      className
    )}
  >
    <img
      className="object-contain w-20 md:mr-auto"
      src="https://firebasestorage.googleapis.com/v0/b/event-park.appspot.com/o/eventpark%20logo.jpg?alt=media"
      alt="logo"
    ></img>
    <div className="mx-auto md:mr-auto text-white">
      <button
        className="md:text-xl p-2 md:p-4 md:transform hover:text-yellow-400 hover:scale-125"
        onClick={() => scrollToView(aboutRef)}
      >
        About Us
      </button>
      <button
        className="md:text-xl p-2 md:p-4 md:transform hover:text-yellow-400 hover:scale-125"
        onClick={() => scrollToView(galleryRef)}
      >
        Gallery
      </button>
      <button
        className="md:text-xl p-2 md:p-4 md:transform hover:text-yellow-400 hover:scale-125"
        onClick={() => scrollToView(contactRef)}
      >
        Contact Us
      </button>
    </div>
  </div>
);

export default Nav;
