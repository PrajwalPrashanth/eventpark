import React from "react";
import Nav from "./nav";

const Hero = (props) => (
  <div className="relative flex items-center justify-center h-screen overflow-hidden">
    <img
      className="absolute object-cover w-full h-screen z-10"
      src={`https://firebasestorage.googleapis.com/v0/b/event-park.appspot.com/o/hero.jpg?alt=media`}
      alt="Bg"
    />
    <div className="absolute w-full h-full bg-black bg-opacity-60 z-20"></div>
    <Nav className="absolute top-5 text-white z-30" {...props} />
    <h1 className="text-white z-30 font-serif text-7xl font-bold text-center">
      Event Park
    </h1>
    <div className="absolute right-10 bottom-10 text-white z-30 text-2xl md:text-4xl bg-black bg-opacity-70 px-6 py-2 rounded-lg">
      Celebration never ends..
    </div>
  </div>
);
export default Hero;
