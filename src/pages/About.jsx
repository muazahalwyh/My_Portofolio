/* eslint-disable react/no-unescaped-entities */
import { FaDownload, FaDribbble, FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

import img5 from "../assets/Foto/img5.png";
import ATS from "../assets/Certificate/ATS.pdf";

export default function About() {
  return (
    <>
      <div className="container mx-auto p-8">
        <div className="text-center p-4">
          <h1 className="text-xl font-bold my-6">
            ABOUT
          </h1>
          <h1 className="text-3xl font-serif italic">
            My <span className="text-amber-500"> Personal  </span> Story
          </h1>
          <hr className="mt-4 mx-auto border-b-4 rounded-xl w-24 border-amber-700" />
        </div>
        <div className="flex-row md:flex p gap-4 mt-8 mb-20 shadow-xl">
          <img src={img5} alt="photo profil" className="w-10/12 md:w-1/2 h-1/2 mx-12 md:mx-0" />
          <div className="justify-center items-center w-full">
            <div className="justify-end p-12">
              <h1 className="text-xl font-serif font-semibold text-right italic text-amber-500 mt-0 md:mt-6">
                FRONT-END WEB DEVELOPER
              </h1>
              <hr className="mt-2 mx-0 border-b rounded-xl  border-amber-700 ml-40" />
              <h1 className="text-xl font-bold my-4 md:my-6">
                Hi !
              </h1>
              <div className="text-justify text-sm">
                <p>My name is <span className="text-amber-500">Mu'azah Al'Adawiyah. </span> I'm 23 years old from Jambi, Indonesia. I graduated from Dinamika Bangsa University, Jambi in 2023 with a Bachelor's Degree in Information System.</p>
                <p className="mt-2">
                  I am currently focusing on Graphic Design also to learn Front-End Development. I'm dedicated to ongoing learning and self-improvement, constantly refining my skills and staying up-to-date with the latest industry trends. Driven by a passion for creative technology, I'm dedicated to crafting exceptional digital experiences that inspire and delight</p>
              </div>
              <div className="flex mt-20 justify-between">
                <a href={ATS} target="link_blink" className="btn btn-md bg-gradient-to-r from-blue-500 to-pink-500 border-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-bold text-white">
                  <FaDownload /> RESUME
                </a>
                <div className="flex gap-4 items-center">
                  <a href="https://www.linkedin.com/in/muazah-aladawiyah-4194741b9/" target="link_blink">
                    <FaLinkedinIn className="w-6 h-6 hover:scale-110 duration-300" />
                  </a>
                  <a href="https://www.instagram.com/alistersunny" target="link_blink" >
                    <FaInstagram className="w-6 h-6 hover:scale-110 duration-300" />
                  </a>
                  <a href="https://www.tiktok.com/@lun_alister" target="link_blink">
                    <FaTiktok className="w-6 h-6 hover:scale-110 duration-300" />
                  </a>
                  <a href="https://dribbble.com/muazahalwyh" target="link_blink">
                    <FaDribbble className="w-6 h-6 hover:scale-110 duration-300" />
                  </a>
                  <a href="https://github.com/muazahalwyh" target="link_blink">
                    <FaGithub className="w-6 h-6 hover:scale-110 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}