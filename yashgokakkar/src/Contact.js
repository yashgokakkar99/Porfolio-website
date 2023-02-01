import Lottie from "lottie-react";
import email from "./assets/lotty/email.json";
import insta from "./assets/instalogo.png";
import lnkd from "./assets/linkedinlogo.png";
import github from "./assets/githublogo.png";
import fb from "./assets/fblogo.png";
import gmail from "./assets/gmaillogo.png";
import loc from "./assets/location.png";

const Contact = () => {
  return (
    <>
    <div className="contact-content bg-slate-700 h-[calc(100vh-6.5rem)]">
      <Lottie animationData={email} className="h-[22rem]" />
      <div className="feelfree">
        <h1 className=" bg-slate-800 border-0 flex justify-center w-2/4 m-auto text-white">Feel free to email or DM me. I can help you with web development</h1>
      </div>
      <div className="contact-con">
        <div className="socials flex space-x-4 pb-4 justify-center mt-10">
          <img src={insta} className="h-14 w-14"></img>
          <img src={lnkd} className="h-14 w-14"></img>
          <img src={gmail} className="h-14 w-14"></img>
          <img src={github} className="h-14 w-14"></img>
          <img src={fb} className="h-14 w-14"></img>
        </div>
      </div>
     
      
    </div>
    <footer className="text-lime-400 flex justify-center bg-slate-800 h-12">
    <h1 className="flex items-center font-bold text-xl">
      Made by Yash Gokakkar
    </h1>
  </footer>
  </>
  );
};

export default Contact;
