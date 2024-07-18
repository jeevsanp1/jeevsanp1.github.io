import { FlipWords } from "./flipwords";
import ".././index.css";
//import all svg and images
import SanjeevImage from "../assets/sanjeev.jpeg";
import ImageName from "../assets/name.svg";
import PeakOne from "../assets/layered-peaks-haikei.svg";
import WaveOne from "../assets/layered-waves-haikei.svg";
import PolygonOne from "../assets/polygon-scatter-haikei.svg";
import Robotics from "../assets/Robotics.jpeg";
import Contact from "./contact";

function Homepage() {
  const words1: any = [
    "highschooler",
    "brother",
    "electrical lead",
    "programmer",
    "guitarist",
    "f1 fan",
    "learner",
    "tamilian",
    "michigander",
  ];
  return (
    <div className="flex flex-col font-display">
      <div className="flex flex-col items-center w-full bg-emerald-200">
        <img
          className="size-64 pt-4 hover:animate-spin-slow"
          src={ImageName}
        ></img>
        <h1 className="pt-4 pb-12 text-2xl text-center w-2/5">
          hi. if i were to describe myself in a word, i would say:
          <br />
          i am a<FlipWords words={words1} />
        </h1>
        <button className="mb-2 p-0.5 relative inline-flex h-14 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <a href="https://www.linkedin.com/in/sanjeevkumarvijayakumar/">
              Connect on LinkedIn!{" "}
            </a>
          </span>
        </button>
      </div>
      <div className="<<wave>> w-full">
        <img className="w-full h-fit" src={PeakOne} />
      </div>
      <div className="w-full bg-emerald-800 text-emerald-100">
        <div className="pl-5 pb-10 flex flex-wrap space-x-10">
          <h1 className="text-6xl w-1/4 pt-2" id="about">
            About Me
          </h1>
          <p className="pt-4 text-lg w-1/3">
            i was born in vellore, tn, india. moved to the u.s. (metro detroit)
            when i was 3, and my fascination with computers started then. <br />
            currently, i am entering my senior year of hs. i'm hoping to pursue
            a job in the field of cs/ee + business. <br />i have experience in
            building react apps, figma mockups. outside of webdev, i am
            proficient in CAD (Onshape), electrical (FRC-specific), and
            public-speaking.
          </p>

          <img className="w-1/3" src={SanjeevImage} />
        </div>
        <img className="w-full" src={WaveOne} />
        <div className="w-full bg-emerald-300 text-emerald-800">
          <div className="pl-5 pb-10 pt-32 flex flex-row-reverse space-x-10">
            <p className="pt-4 text-lg w-1/3">
              in addition, i have spent the last few years mentoring middle
              school robotics as a design coach. we have won regional
              tournaments as the first seed alliance.
            </p>
            <p className="pt-4 text-lg w-1/3">
              i am a part of frc team 4384. we are based in troy, mi. during my
              time here, i have worked on nearly every subteam. i started in
              mechanical, where i learned how to use shop tools (cnc, mill,
              etc.). i moved to cad, where i designed important aspects of the
              robot. now, i serve as the electrical captain, where i manage all
              the electrical work for the team. i also continue to work on the
              previous subteams.
            </p>
            <h1 className="text-6xl w-1/4 pt-2" id="robotics">
              Robotics
            </h1>
            <img className="w-1/3" src={Robotics} />
          </div>
        </div>
        <img className="w-full" src={PolygonOne} />
        <Contact />
      </div>
    </div>
  );
}

export default Homepage;
