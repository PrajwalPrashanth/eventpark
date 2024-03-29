import React from "react";
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagramSquare as Instagram,
  FaWhatsappSquare as Whatsapp,
  FaPhoneSquareAlt as Phone,
  FaMapMarkedAlt as Location,
} from "react-icons/fa";

const socialMedia = [
  {
    Icon: Facebook,
    src: "https://facebook.com",
  },
  {
    Icon: Twitter,
    src: "https://twitter.com",
  },
  {
    Icon: Instagram,
    src: "https://instagram.com/eventpark.bengaluru",
  },
];

const phoneNumbers = {
  ASHOK: 9148250647,
  DEEPA: 8050320302,
};

const address = {
  body: `No.53/1, 1st Block Bhavan Housing Society, Banagirinagara, 
         Banshankari 3rd Stage, Bengaluru - 560085`,
  landmark: "Landmark: Near KIMS College, Above Lassi shop",
};

const TestimonialCard = () => (
  <div class="w-11/12 md:w-4/12 py-3 md:py-4 px-6 md:px-10 bg-white shadow-lg rounded-lg my-2 mx-auto md:mx-8">
    <div>
      <h2 class="text-gray-800 text-2xl font-semibold hidden lg:block">
        Wedding decor
      </h2>
      <p class="text-sm md:text-base mt-2 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
        deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
        commodi hic, suscipit in a veritatis pariatur minus consequuntur!
      </p>
    </div>
    <div class="flex justify-end mt-4 text-xl font-medium text-pink-500">
      John Doe
    </div>
  </div>
);

const RenderClientLogo = () => (
  <div className="">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/event-park.appspot.com/o/logo.png?alt=media&token=2a3d6f30-06a4-4168-ac88-fadf489af201"
      className="object-contain p-2 md:p-4"
    />
  </div>
);

const Footer = ({ contactRef }) => {
  return (
    <div className="flex flex-col md:h-screen justify-between bg-yellow-400">
      <div className="m-auto p-2 md:p-4">
        <div className="text-4xl text-center pb-4 font-semibold">
          Testimonials
        </div>
        <div class="flex flex-col md:flex-row">
          {TestimonialCard()}
          {TestimonialCard()}
          {TestimonialCard()}
        </div>
      </div>
      <div className="flex flex-col m-auto py-2">
        <div className="text-4xl text-center pb-4 font-semibold">
          Our Clients
        </div>
        <div class="flex w-10/12 md:w-5/12 mx-auto">
          {RenderClientLogo()}
          {RenderClientLogo()}
          {RenderClientLogo()}
          {RenderClientLogo()}
        </div>
      </div>
      <div ref={contactRef} className="flex flex-col md:h-2/6 bg-black">
        <div class="flex flex-col md:flex-row items-center h-full">
          <div className="flex flex-col w-full md:w-4/12 m-auto text-white items-center space-y-2 my-4 md:pt-0">
            <div class="flex">
              <Phone size={40} className="text-white" />
              <Whatsapp size={40} className="text-white" />
            </div>
            <span className="text-lg">+91 {phoneNumbers.ASHOK} - Ashok</span>
            <span className="text-lg">+91 {phoneNumbers.DEEPA} - Deepa</span>
          </div>
          <div class="flex w-full md:w-4/12 my-2">
            <div className="flex space-x-8 m-auto">
              {socialMedia.map(({ Icon, src }) => (
                <div>
                  <a href={src} target="_blank" rel="noreferrer">
                    <Icon size={48} className="text-white" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full md:w-4/12 text-white p-4 text-center m-auto items-center">
            <Location size="40" class="text-white mb-4" />
            <div>{address.body}</div>
            <div class="text-sm mt-2">{address.landmark}</div>
          </div>
        </div>
        <div className="mt-auto mb-2 pt-2 text-white text-center border-t border-white">
          &copy; 2021 Event Park Pvt. Ltd. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
