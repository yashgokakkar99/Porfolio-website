import coder from "./assets/lotty/coder.json";
import Lottie from "lottie-react";
import insta from "./assets/instalogo.png";
import lnkd from "./assets/linkedinlogo.png";
import github from "./assets/githublogo.png";

const Home = () => {
  return (
    <div className="main bg-slate-700 h-[calc(100vh-6.5rem)]  w-full">
      <div className="top flex space-x-5 justify-center h-full">
        <div className="text flex items-center">
          <div className="greet-fron px-10  justify-items-center">
            <h1 className="text-3xl font-bold  text-white">Hello ! I am</h1>
            <h1 className="text-5xl font-bold  text-white pb-4">
              Yash Gokakkar
            </h1>
            <h1 className="text-3xl text-white pb-4">
              Full Stack Web Developer
            </h1>
            <div className="socials flex space-x-4 pb-4">
              <img src={insta} className="h-14 w-14"></img>
              <img src={lnkd} className="h-14 w-14"></img>
              <img src={github} className="h-14 w-14"></img>
            </div>
            <div className="btns flex space-x-5">
              <button className=" bg-lime-400 p-2 rounded-lg">Know More</button>
              <button className=" bg-lime-400 p-2 rounded-lg">Resume</button>
            </div>
          </div>
        </div>

        <div className="flex comp-guy items-center">
          <Lottie className="h-[28rem]" animationData={coder} />
        </div>
      </div>

      <footer className="text-lime-400 flex justify-center bg-slate-800 h-12" fixed="botton">
        <h1 className="flex items-center font-bold text-xl">Made by Yash Gokakkar</h1>
      </footer>
    </div>
  );
};

export default Home;
