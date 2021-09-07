import React, { useEffect, useState } from "react";
import PhotoGallery from "react-photo-gallery";
import styles from "./gallery.module.css";
import cn from "classnames";

const getFiMedia = (name) =>
  `https://firebasestorage.googleapis.com/v0/b/event-park.appspot.com/o/${name}?alt=media`;

const photos = [
  {
    src: getFiMedia("galley-images%2FDSC_2822.jpg"),
    width: 1691,
    height: 1241,
  },
  {
    src: getFiMedia("galley-images%2FDSC_2887.jpg"),
    width: 1205,
    height: 1805,
  },
  {
    src: getFiMedia("galley-images%2FDSC_2939.jpg"),
    width: 1154,
    height: 1729,
  },
  {
    src: getFiMedia("galley-images%2FDSC_2971.jpg"),
    width: 1194,
    height: 1788,
  },
  {
    src: getFiMedia("galley-images%2FSKP01114.jpg"),
    width: 2385,
    height: 1591,
  },
  {
    src: getFiMedia("galley-images%2F_DSC2730.jpg"),
    width: 1659,
    height: 1643,
  },
  {
    src: getFiMedia("galley-images%2F_DSC3011.jpg"),
    width: 2477,
    height: 1651,
  },
  {
    src: getFiMedia("galley-images%2F_DSC3012.jpg"),
    width: 1523,
    height: 2085,
  },
  {
    src: getFiMedia("galley-images%2F_DSC3013.jpg"),
    width: 2477,
    height: 1651,
  },
  {
    src: getFiMedia("galley-images%2F_DSC3431.jpg"),
    width: 2477,
    height: 1651,
  },
  {
    src: getFiMedia("galley-images%2F_DSC3717.jpg"),
    width: 2455,
    height: 1635,
  },
  {
    src: getFiMedia("galley-images%2F_DSC4005.jpg"),
    width: 1626,
    height: 1098,
  },
  {
    src: getFiMedia("galley-images%2F_DSC4072.jpg"),
    width: 1587,
    height: 925,
  },
  {
    src: getFiMedia("galley-images%2F_MMP5198.jpg"),
    width: 1591,
    height: 1890,
  },
];

const events = [
  "Wedding Decor",
  "Corporate Events",
  "Birthday Decor",
  "Pre-Wedding & Wedding Photoshoot",
  "Event Photoshoot",
  "More...",
];

const Gallery = ({ aboutRef, galleryRef }) => {
  const renderEvent = (label) => (
    <div
      className={"text-center bg-black text-yellow-400 rounded-md py-1 my-0.5"}
    >
      {label}
    </div>
  );

  return (
    <div className="bg-gray-900 py-4 md:h-screen">
      <div
        className="flex flex-col md:flex-row h-full mx-auto w-11/12"
        style={{ boxShadow: "0 10px 50px rgba(0,0,0, 0.8)" }}
      >
        <div
          ref={aboutRef}
          className="w-full md:w-3/12 bg-yellow-400 rounded-2xl md:rounded-none md:rounded-l-2xl"
        >
          <video
            className="object-cover w-24 mx-auto mt-6"
            autoPlay="autoplay"
            muted
            loop
            src={getFiMedia("animated-logo.mov")}
          ></video>
          <div className="text-center my-2 text-4xl">About Us</div>
          <div className="text-justify my-4 px-6 text-lg leading-5">
            Event Park is a stage where we plan for your wedding that you've
            always imagined of, the dream come true moment. We take care of
            everything, curated in a package which includes Decor & Photography,
            while also focusing our utmost importance towards sanitizing and
            following all safety protocols as your occasion deserves the best
            and the most careful execution.
          </div>
          <div className="flex flex-col my-2 justify-around mx-8">
            {events.map((label) => renderEvent(label))}
          </div>
        </div>
        <div
          ref={galleryRef}
          className={cn(
            "flex flex-col w-full md:w-9/12 mt-4 md:mt-0 overflow-scroll rounded-2xl md:rounded-none md:rounded-r-2xl border border-yellow-400",
            styles.noscrollbar
          )}
        >
          <div className="flex">
            <div
              className="relative block w-full overflow-hidden"
              style={{ paddingTop: "56.25%" }}
            >
              <video
                src={getFiMedia("hero-video.m4v")}
                autoPlay="autoplay"
                muted
                loop
                className="absolute block w-full h-full top-0 left-0"
              />
            </div>
          </div>
          <div className="">
            <PhotoGallery photos={photos} margin={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
// #d2b596
