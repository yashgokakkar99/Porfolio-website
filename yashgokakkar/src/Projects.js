import dh from "./assets/Projects/datahub.png";
import als from "./assets/Projects/allsecure.png";
import imb from "./assets/Projects/importblogs.png";
import map2p from "./assets/Projects/map2procoder.png";

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
import php from "./assets/Backend/php.png";
import excel from "./assets/Frontend/excel.png";
import wp from "./assets/Frontend/wordpress.png";

const Projects = () => {
  return (
    <div className="project-content bg-slate-700 h-auto">
      <div className="pro1 border-2 text-white font-bold w-[45rem] m-auto mb-12">
        <h1 className="font-bold text-xl">
          DataHub
        </h1>
        <div className="pro1desc">
          <p>
          DataHub is my first website developed using Wordpress.com. Excel data containing multiple
          rows and columns is very much difficult to read and understand it, to solve this problem we 
          came up with DataHub which converts this excel data to a smart and interactive dashboard which 
          can be easily understood by user.
          </p>
        </div>
        <div className="skill1 fron-con flex space-x-4 pb-4 justify-center">
          <img src={wp} className="h-[3rem] w-[3rem] hover:scale-125" title="HTML"></img>
          <img src={excel} className="h-[3rem] w-[3rem] hover:scale-125" title="CSS"></img>
          
        </div>
        <button className="p-3 bg-green-400 rounded-xl">
          Visit
        </button>
      </div>

      <div className="pro2 border-2 text-white font-bold w-[45rem] m-auto mb-12">
        <h1 className="font-bold text-xl">
          AllSecure
        </h1>
        <div className="pro2desc">
          <p>
          AllSecure is a website to provides security features such as women security, fire emergency,
          medical emergency and vehicle search. 
          </p>
        </div>
        <div className="skill2 fron-con flex space-x-4 pb-4 justify-center">
        <img src={html} className="h-[3rem] w-[3rem] hover:scale-125" title="HTML"></img>
          <img src={css} className="h-[3rem] w-[3rem] hover:scale-125" title="CSS"></img>
          <img src={js} className="h-[3rem] w-[3rem] hover:scale-125" title="JAVASCRIPT"></img>
          <img src={php} className="h-[3rem] w-[3rem] hover:scale-125" title="JAVASCRIPT"></img>
        </div>
        <button className="p-3 bg-green-400 rounded-xl">
          Visit
        </button>
      </div>

      <div className="pro3 border-2 text-white font-bold w-[45rem] m-auto mb-12">
        <h1 className="font-bold text-xl">
          map2proCoder
        </h1>
        <div className="pro3desc">
          <p>
          In order to help students make bright careers in the various fields such as Web dev, Android Dev, Cloud computing, AI, ML, Cyber security and many more. 
          "map2proCoder" provides key links(resources) to study materials available online.
          </p>
        </div>
        <div className="skill3">
        <div className="skill1 fron-con flex space-x-4 pb-4 justify-center">
          <img src={html} className="h-[3rem] w-[3rem] hover:scale-125" title="HTML"></img>
          <img src={css} className="h-[3rem] w-[3rem] hover:scale-125" title="CSS"></img>
          <img src={js} className="h-[3rem] w-[3rem] hover:scale-125" title="JAVASCRIPT"></img>
          <img src={react} className="h-[3rem] w-[3rem] hover:scale-125" title="REACT.JS"></img>
        </div>
        </div>
        <button className="p-3 bg-green-400 rounded-xl">
          Visit
        </button>
      </div>

      <div className="pro4 border-2 text-white font-bold w-[45rem] m-auto mb-12">
        <h1 className="font-bold text-xl">
          importBlogs
        </h1>
        <div className="pro1desc">
          <p>
          importBlogs is a website where the user can create, add, read and delete blogs.
          </p>
        </div>
        <div className="skill4 fron-con flex space-x-4 pb-4 justify-center">
        <img src={html} className="h-[3rem] w-[3rem] hover:scale-125" title="HTML"></img>
          <img src={css} className="h-[3rem] w-[3rem] hover:scale-125" title="CSS"></img>
          <img src={js} className="h-[3rem] w-[3rem] hover:scale-125" title="JAVASCRIPT"></img>
          <img src={react} className="h-[3rem] w-[3rem] hover:scale-125" title="REACT.JS"></img>
          <img src={json} className="h-[3rem] w-[3rem] hover:scale-125" title="JSON"></img>
        </div>
        <button className="p-3 bg-green-400 rounded-xl">
          Visit
        </button>
      </div>
    </div>
  );
};

export default Projects;
