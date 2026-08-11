import { FaInstagram, FaGoogle,FaWhatsapp,FaYoutube,} from "react-icons/fa";
import {SiGmail,SiGooglemaps} from "react-icons/si";
const footer = () => {
  return (
    <div className="bg-black text-white p-4 pt-12">
      
      <div className="px-8 md:flex">

        <div className="md:w-[50%]">
          <h1 className="font-bodo text-4xl ">A U R E N</h1>
          <p className="font-mont text-1xl pt-4"> Elevating your stay with unmatched elegance and<br/> exclusive comfort.
          </p>
          <div className="flex gap-6 py-6 items-center">
            <a href="https://www.instagram.com"><FaInstagram className="footerlink"/></a>
            <a href="https://www.google.com"><FaGoogle className="footerlink2"/></a>
            <a href="https://www.whatsappweb.com"><FaWhatsapp className="footerlink"/></a>
            <a href="https://www.gmail.com"><SiGmail className="footerlink2"/></a>
            <a href="https://www.youtube.com"><FaYoutube className="footerlink"/></a>
            <a href="https://www.googlemaps.com"><SiGooglemaps className="footerlink2"/></a>
          </div>
        </div>
        <div className="flex justify-between md:w-[50%] md:pr-14">
          <div className="flex flex-col gap-2 font-bodo">
            <h1 className="footerheading">THE COLLECTION</h1>
            <a className="anchor">Private Island</a>
            <a className="anchor">Architectural Homes</a>
            <a className="anchor">Yacht Charter</a>
            <a className="anchor">Aviation</a>
          </div>
          <div className="flex flex-col gap-2 font-bodo">
            <h1 className="footerheading">COMPANY</h1>
            <a className="anchor">About Us</a>
            <a className="anchor">General</a>
            <a className="anchor">Press</a>
            <a className="anchor">Careers</a>
          </div>
        </div>

      </div>
      <div className=" md:flex md:justify-end border-b mt-4">
        <div className="mx-8 pb-6 flex flex-col gap-2 font-bodo
        ">
          <h1 className="footerheading">CONNECT</h1>
          <a className="anchor">Membership Enquiry</a>
          <a className="anchor">Contact</a>
        </div>
      </div>
      <div className="md:flex justify-between text-gray-500 text-[12px] pb-2 font-bodo">
        <div>© 2024 AUREN. All rights reserved.</div>
        <div className="gap-6 flex ">
          <a className="anchor">Privacy</a>
          <a className="anchor">Terms & Conditions</a>
        </div>
      </div>

    </div>
  )
}

export default footer