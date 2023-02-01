import edu from "./assets/lotty/education.json";
import Lottie from "lottie-react";

const Education = () => {
  return (
    <div className="education-content bg-slate-700 h-auto">
         <div className="header-con flex justify-start">
        <h1 className="border-0 text-white px-12 py-2 mt-4 text-xl font-bold rounded-r-2xl bg-slate-500">
          Education
        </h1>
      </div>

      <div className="Certi">
        <div className="cert-title">
           <h1 className="header-con flex justify-center border-0 text-white px-12 py-2 mt-4 text-xl font-bold  bg-slate-500">Certifications</h1>
        </div>
        <Lottie className="h-[22rem]" animationData={edu} />
      </div>
      <div className="Qualifications">
        <div className="qua-title">
           <h1 className="header-con flex justify-center border-0 text-white px-12 py-2 mt-4 text-xl font-bold  bg-slate-500">Qualifications</h1>
        </div>
        <div className="edu1 text-white w-full">
            <div className="edu1-head">
                <h1>D Y Patil College of Engineering Akurdi Pune</h1>
            </div>
            <div className="edu1-con flex space-x-9">
                <div className="edu1-year flex-col justify-start">
                    <div className="year"><h1 className="text-white font-bold">2020-Present</h1></div>
                    <div className="cgpa"><h1 className="text-white font-bold">CGPA : 8.7</h1></div>
                </div>
                <div className="edu1-type flex justify-end items-center  absolute right-10">
                    <h1>B.E COMP ENGG</h1>
                </div>
            </div>
        </div>

        <div className="edu1 text-white w-full">
            <div className="edu1-head">
                <h1>KAMALNAYAN BAJAJ JR COLLEGE SAMBHAJINAGAR PUNE</h1>
            </div>
            <div className="edu1-con flex space-x-9">
                <div className="edu1-year flex-col justify-start">
                    <div className="year"><h1 className="text-white font-bold">2018-2020</h1></div>
                    <div className="cgpa"><h1 className="text-white font-bold">Percentage : 86.31 %</h1></div>
                </div>
                <div className="edu1-type flex justify-end items-center  absolute right-10">
                    <h1>HSC-SCIENCE</h1>
                </div>
            </div>
        </div>

        <div className="edu1 text-white w-full">
            <div className="edu1-head">
                <h1>S.N.B.P. SCHOOL MORWADI PUNE</h1>
            </div>
            <div className="edu1-con flex space-x-9">
                <div className="edu1-year flex-col justify-start">
                    <div className="year"><h1 className="text-white font-bold">2006-2018</h1></div>
                    <div className="cgpa"><h1 className="text-white font-bold">Percentage : 95 %</h1></div>
                </div>
                <div className="edu1-type flex justify-end items-center  absolute right-10">
                    <h1>SSC</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
