import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaLinkedin, FaFacebook, FaGoogleDrive } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 items-center justify-between gap-6 sm:gap-12 text-center bg-base-100 sticky top-[100vh]">
      <div className="items-center">
        <img className="mx-auto w-full" src={logo} alt="" />
        <Link
          to={"/"}
          className="mx-auto normal-case text-base md:text-2xl lg:text-3xl font-bold text-gradient"
        >
          Doll_FairyWorld
        </Link>
        <br /> <p className="mx-auto text-sm">
          Copyright © Doll_Fairy_World-2023 - All right reserved
        </p>
      </div>
      <div className="space-y-4">
        <span className="footer-title mb-8">Get in touch</span>
        <div className="flex justify-evenly gap-4">
          <a className="text-2xl">
            <FaLinkedin />
          </a>
          <a className="text-2xl">
            <FaFacebook />
          </a>
          <a className="text-2xl">
            <FaGoogleDrive />
          </a>
        </div>
      </div>
      <div className="items-center">
        <p className="footer-title mx-auto mb-2">Contact</p>
        <div className="text-center text-sm sm:text-base lg:text-xl">
          <b>29, West Panthapath, Dhaka.</b>
          <p>sayed@mssbd.org</p>
          <p>01730024046</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
