import { FaInstagram, FaGoogle,FaWhatsapp,FaYoutube,} from "react-icons/fa";
import {SiGmail,SiGooglemaps} from "react-icons/si";
const footer = () => {
  return (
    <div className="bg-black text-white">
      
      <div className="px-8">

        <div>
          <h1 className="font-bodo text-4xl pt-24 pb-6">A U R E N</h1>
          <p className="font-mont text-[0.8vw]"> Elevating your stay with unmatched elegance and<br/> exclusive comfort.
          </p>
          <div className="flex gap-6 pt-8 items-center">
            <a><FaInstagram className="footerlink"/></a>
            <a><FaGoogle className="footerlink2"/></a>
            <a><FaWhatsapp className="footerlink"/></a>
            <a><SiGmail className="footerlink2"/></a>
            <a><FaYoutube className="footerlink"/></a>
            <a><SiGooglemaps className="footerlink2"/></a>
          </div>
        </div>
        <div>

        </div>

      </div>


    </div>
  )
}

export default footer