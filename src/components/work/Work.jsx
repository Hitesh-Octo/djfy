import React from "react";
import "./work.css";

import { IoIosContact } from "react-icons/io";
import { BsQrCodeScan } from "react-icons/bs";

function Work() {
  return (
    <>
      <div className="Work_container flex flex-col items-center py-10 px-4 pb-11">
        <h1 className="text-2xl md:text-2xl mb-2 text-center font-sans">
          <span className="text-white">HERE'S HOW </span>
          <span className="text-[#ED3E31]">DJFY WORKS</span>
        </h1>
        <div className="w-16 h-1 bg-[#ED3E31] mb-8"></div>

        {/* Work_content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl">
          <div className="Box1">
            <div className="text-white Box1-content">
              <div className="Box1_Iconbg">
                <div className="Box1_Icon pb-5 ml-1 pt-1">
                  <IoIosContact />
                </div>
              </div>
              <h2 className="pl-3 pb-2">Free Account Creation</h2>
              <p className="pl-3">
                DJs, live musicians/bands, and venue owners can sign up for a
                free account on DJFY, gaining instant access to a world of new
                opportunities.
              </p>
            </div>
          </div>

          <div className="Box1">
            <div className="text-white Box1-content">
              <div className="Box1_Iconbg">
                <div className="Box1_Icon pb-5 ml-1 pt-1">
                  <BsQrCodeScan />
                </div>
              </div>
              <h2 className="pl-3 pb-2">Free Account Creation</h2>
              <p className="pl-3">
                DJs, live musicians/bands, and venue owners can sign up for a
                free account on DJFY, gaining instant access to a world of new
                opportunities.
              </p>
            </div>
          </div>

          <div className="Box1">
            <div className="text-white Box1-content">
              <div className="Box1_Iconbg">
                <div className="Box1_Icon pb-5 ml-1 pt-1">
                  {" "}
                  <IoIosContact />{" "}
                </div>
              </div>
              <h2 className="pl-3 pb-2">Free Account Creation</h2>
              <p className="pl-3">
                DJs, live musicians/bands, and venue owners can sign up for a
                free account on DJFY, gaining instant access to a world of new
                opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl">

          <div className="Box1 mt-[50px]">
            <div className="text-white Box1-content">
              <div className="Box1_Iconbg">
                <div className="Box1_Icon pb-5 ml-1 pt-1">
                  <IoIosContact />
                </div>
              </div>
              <h2 className="pl-3 pb-2">Free Account Creation</h2>
              <p className="pl-3">
                DJs, live musicians/bands, and venue owners can sign up for a
                free account on DJFY, gaining instant access to a world of new
                opportunities.
              </p>
            </div>
          </div>

          <div className="Box1 mt-[50px]">
            <div className="text-white Box1-content">
              <div className="Box1_Iconbg">
                <div className="Box1_Icon pb-5 ml-1 pt-1">
                  <IoIosContact />
                </div>
              </div>
              <h2 className="pl-3 pb-2">Free Account Creation</h2>
              <p className="pl-3">
                DJs, live musicians/bands, and venue owners can sign up for a
                free account on DJFY, gaining instant access to a world of new
                opportunities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Work;
