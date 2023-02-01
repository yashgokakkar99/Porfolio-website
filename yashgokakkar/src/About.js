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
import node from "./assets/Backend/node.png";
import express from "./assets/Backend/express.svg";
import mongodb from "./assets/Backend/mongodb.svg";
import mysql from "./assets/Backend/mysql.png";
import json from "./assets/Backend/json.png";
import c from "./assets/Programming/c.png";
import cpp from "./assets/Programming/c++.png";
import python from "./assets/Programming/python.png";


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
            <img src={html } className="h-[5rem] w-[5rem] hover:scale-125" title="HTML"></img>
            <img src={css } className="h-[5rem] w-[5rem] hover:scale-125" title="CSS"></img>
            <img src={js } className="h-[5rem] w-[5rem] hover:scale-125" title="JS"></img>
            <img src={bootstrap } className="h-[5rem] w-[5rem] hover:scale-125" title="Bootstrap"></img>
            <img src={react } className="h-[5rem] w-[5rem] hover:scale-125" title="React.js"></img>
            <img src={tailwindcss } className="h-[5rem] w-[5rem] hover:scale-125" title="Tailwind CSS"></img>
        </div>
      </div>
      <div className="backend">
      <div className="fron-title">
           <h1 className="header-con flex justify-center border-0 text-white px-12 py-2 mt-4 text-xl font-bold  bg-slate-500">Back End Development</h1>
        </div>
        <Lottie className="h-[28rem]" animationData={backend} />
        <div className="fron-con flex space-x-4 pb-4 justify-center">
            <img src={node } className="h-[5rem] w-[5rem]  hover:scale-125" title="node.js"></img>
            <img src={express } className="h-[5rem] w-[5rem] hover:scale-125" title="express.js"></img>
            <img src={mongodb } className="h-[5rem] w-[5rem] hover:scale-125" title="mongodb"></img>
            <img src={mysql } className="h-[5rem] w-[5rem] hover:scale-125" title="mysql"></img>
            <img src={json } className="h-[5rem] w-[5rem] hover:scale-125" title="json"></img>
            
        </div>
      </div>
      <div className="programming">
      <div className="fron-title">
           <h1 className="header-con flex justify-center border-0 text-white px-12 py-2 mt-4 text-xl font-bold  bg-slate-500">Programming</h1>
        </div>
        <Lottie className="h-[28rem]" animationData={prog} />
        <div className="fron-con flex space-x-4 pb-4 justify-center">
            <img src={c } className="h-[5rem] w-[5rem] hover:scale-125" title="C programming"></img>
            <img src={cpp } className="h-[5rem] w-[5rem] hover:scale-125" title="C++ programming"></img>
            <img src={python } className="h-[5rem] w-[5rem] hover:scale-125" title="Python programming"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
