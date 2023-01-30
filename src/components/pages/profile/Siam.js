import React from "react";
import TopImage from "../../Assets/Social Network/top.jpg";
import ProfileImage from "../../Assets/ProfilePhoto/siam.jpg";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import facebook from "../../Assets/Social Network/facebook.svg";
import instagram from "../../Assets/Social Network/instagram-round-svgrepo-com.svg";
import twitter from "../../Assets/Social Network/twitter.svg";
import github from "../../Assets/Social Network/github.svg";
import whatsapp from "../../Assets/Social Network/whatsapp.svg";
import dev from "../../Assets/Social Network/dev.svg";
import reddit from "../../Assets/Social Network/reddit.svg";
import youtube from "../../Assets/Social Network/youtube.svg";
import linkedin from "../../Assets/Social Network/linkedin.svg";

const siam = () => {
  return (
    <div>
      <div className="top-image">
        <img src={TopImage} alt="Top" />
      </div>

      <div className="avatar">
        <div className="w-24 rounded-full ring ring-secondary ring-offset-secondary-100 ring-offset-2 absolute	-top-16 left-5">
          <img src={ProfileImage} alt="Profile" />
        </div>
      </div>

      <div className="mt-14 px-5">
        <h3 className="text-2xl font-bold">Siam Ahmed</h3>
        <h5 className="text-lg font-medium">Managing Director, Info Card</h5>
        <p className="mt-2 text-justify">Words isnt enough to describe</p>

        <div className="mt-8">
          <hr />
        </div>

        <div className="my-8">
          <h3 className="text-xl font-bold tracking-wide">About</h3>

          <div className="my-4">
            <a href="mailto:siam.infocard@gmail.com" class="flex my-auto mb-4">
              <MdEmail className="text-5xl rounded-full bg-black text-white p-3" />
              <div className="ml-3">
                <h4 className="text-base font-medium">
                  siam.infocard@gmail.com
                </h4>
                <p className="text-xs">Email</p>
              </div>
            </a>

            <a href="tel:+8801940988289" class="flex my-auto mb-4">
              <MdCall className="text-5xl rounded-full bg-black text-white p-3" />
              <div className="ml-3">
                <h4 className="text-base font-medium">+8801940988289</h4>
                <p className="text-xs">Cell Phone</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/iammhador/"
              target="a_blank"
              class="flex my-auto mb-4"
            >
              <FaTelegramPlane className="text-5xl rounded-full bg-black text-white p-3" />
              <div className="ml-3">
                <h4 className="text-base font-medium">Find me on linkedin</h4>
                <p className="text-xs">LinkedIn</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-8">
          <hr />
        </div>

        <div className="my-8">
          <h3 className="text-xl font-bold tracking-wide">Links</h3>

          <div className="grid grid-cols-3 my-4 justify-items-center">
            <a href="https://www.facebook.com/siyamhossenabid" target="a_blank">
              <img src={facebook} alt="facebook" className="w-16 mb-7" />
            </a>
            <a href="https://www.instagram.com/siamahmed404/" target="a_blank">
              <img src={instagram} alt="instagram" className="w-16 mb-7" />
            </a>

            <a href="https://wa.me/+8801940988289" target="a_blank">
              <img src={whatsapp} alt="whatsapp" className="w-16 mb-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default siam;
