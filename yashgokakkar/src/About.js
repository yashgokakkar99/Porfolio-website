import frontend from "./assets/lotty/frontend.json";
import backend from "./assets/lotty/backend.json";
import prog from "./assets/lotty/prog.json";
import Lottie from "lottie-react";
import html from "./assets/Frontend/html.png";
import css from "./assets/Frontend/css.png";
import js from "./assets/Frontend/js.png";
import bootstrap from "./assets/Frontend/bootstrap.png";
import react from "./assets/Frontend/react.png";
import tailwindcss from "./assets/Frontend/tailwindcss.png"

const About = () => {
  return (
    <div className="about-content bg-slate-700 h-auto">
      <div className="header-con flex justify-start">
        <h1 className="border-0 text-white px-12 py-2 mt-4 text-xl font-bold rounded-r-2xl bg-slate-500">
          My skills
        </h1>
      </div>

      <div className="frontend">
        <div className="fron-title">
           <h1 className="header-con flex justify-center border-0 text-white px-12 py-2 mt-4 text-xl font-bold  bg-slate-500">Front End Development</h1>
        </div>
        <Lottie className="h-[22rem]" animationData={frontend} />
        <div className="fron-con flex space-x-4 pb-4 justify-center">
            <img src={html } className="h-[5rem] w-[5rem]" title="HTML"></img>
            <img src={css } className="h-[5rem] w-[5rem]" title="CSS"></img>
            <img src={js } className="h-[5rem] w-[5rem]" title="JS"></img>
            <img src={bootstrap } className="h-[5rem] w-[5rem]" title="Bootstrap"></img>
            <img src={react } className="h-[5rem] w-[5rem]" title="React.js"></img>
            <img src={tailwindcss } className="h-[5rem] w-[5rem]" title="Tailwind CSS"></img>
        </div>
      </div>
      <div className="backend">
      <div className="fron-title">
           <h1 className="header-con flex justify-center border-0 text-white px-12 py-2 mt-4 text-xl font-bold  bg-slate-500">Back End Development</h1>
        </div>
        <Lottie className="h-[28rem]" animationData={backend} />
        <div className="fron-con flex space-x-4 pb-4 justify-center">
            <img src={html } className="h-[5rem] w-[5rem]" title="HTML"></img>
            <img src={css } className="h-[5rem] w-[5rem]" title="CSS"></img>
            <img src={js } className="h-[5rem] w-[5rem]" title="JS"></img>
            <img src={bootstrap } className="h-[5rem] w-[5rem]" title="Bootstrap"></img>
            <img src={react } className="h-[5rem] w-[5rem]" title="React.js"></img>
            <img src={tailwindcss } className="h-[5rem] w-[5rem]" title="Tailwind CSS"></img>
        </div>
      </div>
      <div className="programming">
      <div className="fron-title">
           <h1 className="header-con flex justify-center border-0 text-white px-12 py-2 mt-4 text-xl font-bold  bg-slate-500">Programming</h1>
        </div>
        <Lottie className="h-[28rem]" animationData={prog} />
        <div className="fron-con flex space-x-4 pb-4 justify-center">
            <img src={html } className="h-[5rem] w-[5rem]" title="HTML"></img>
            <img src={css } className="h-[5rem] w-[5rem]" title="CSS"></img>
            <img src={js } className="h-[5rem] w-[5rem]" title="JS"></img>
            <img src={bootstrap } className="h-[5rem] w-[5rem]" title="Bootstrap"></img>
            <img src={react } className="h-[5rem] w-[5rem]" title="React.js"></img>
            <img src={tailwindcss } className="h-[5rem] w-[5rem]" title="Tailwind CSS"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
