//Icon
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import kine from "../assets/logo/kine.png";
import Figma from "../assets/logo/Figma.png";

// Gallery
import Clipping2 from "../assets/Gallery/Clipping2.jpg";
import Logo1 from "../assets/Gallery/Logo1.jpg";
import Logo2 from "../assets/Gallery/Logo2.jpg";
import POSTER1 from "../assets/Gallery/POSTER1.jpg";
import POSTER2 from "../assets/Gallery/POSTER2.jpg";
import POSTER3 from "../assets/Gallery/POSTER3.jpg";
import webmovie from "../assets/Gallery/webmovie.jpg";
import webrestaurant from "../assets/Gallery/webrestaurant.jpg";
import webbookshelf from "../assets/Gallery/webbookshelf.jpg";

const galleries = [
  { id: "1", src: webbookshelf, alt: "website bookshelf" },
  { id: "2", src: webmovie, alt: "website movie" },
  { id: "3", src: webrestaurant, alt: "website restaurant" },
  { id: "4", src: Clipping2, alt: "clipping image" },
  { id: "5", src: POSTER1, alt: "poster 1" },
  { id: "6", src: POSTER2, alt: "poster 2" },
  { id: "7", src: POSTER3, alt: "poster 3" },
  { id: "8", src: Logo1, alt: "logo 1" },
  { id: "9", src: Logo2, alt: "logo 2" },
];

export default function Skill() {
  return (
    <>
      <div className="container mx-auto p-8">
        <div className="text-center p-4">
          <h1 className="text-xl font-bold my-6">
            SKILLS PORTOFOLIO
          </h1>
          <h1 className="text-3xl font-serif italic">
            Where Do Your <span className="text-amber-500"> Skills </span> Stand?
          </h1>
          <hr className="mt-4 mx-auto border-b-4 rounded-xl w-24 border-amber-700" />
        </div>

        <div className="text-center text-sm my-10">
          <div className="grid md:flex grid-cols-3 gap-8 my-10 mx-28 ">
            <FaHtml5 className=" w-20 h-20 text-amber-600" />
            <FaCss3 className=" w-20 h-20 text-cyan-400" />
            <FaJs className=" w-20 h-20 text-amber-400" />
            <FaReact className=" w-20 h-20 text-cyan-500" />
            <FaBootstrap className=" w-20 h-20 text-purple-800" />
            <SiAdobeillustrator className=" w-20 h-20 text-amber-600" />
            <SiAdobephotoshop className=" w-20 h-20 text-blue-800" />
            <div>
              <img src={Figma} alt="kinemaster" className="w-20 h-20 md:h-12 md:mt-4" />
            </div>
            <div>
              <img src={kine} alt="kinemaster" className="w-20 h-20 md:h-12 md:mt-4" />
            </div>
          </div>

          <h1 className="font-serif font-semibold text-2xl text-center italic text-amber-500">My Project Gallery
          </h1>
          <hr className="mt-4 mx-auto border-b-4 rounded-xl w-24 border-amber-700" />

          <div className="container mx-auto">
            <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:px-0 px-20">
              {galleries.slice(0, 7).map((galery) =>(
                <div key={galery.id} className="w-40 md:w-56 shadow-xl">
                <img
                    src={galery.src}
                    alt={galery.alt} />
                </div>
              ))}            
              
              <div className="w-40 md:w-56 gap-20 shadow-xl">
                {galleries.slice(7, 9).map((galery) =>(
                  <img key={galery.id} className="mb-4"
                    src={galery.src}
                    alt={galery.alt} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}