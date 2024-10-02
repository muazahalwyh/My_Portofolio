/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import img1 from "../assets/Foto/img1.png"

export default function Hero() {
  return (
    <>
      <div className="mx-10 ml-10">
        <div className="hero-content mx-auto flex-col md:flex-row-reverse md:gap-6 gap-16 ">
          <img
            src={img1}
            className="md:w-1/2 w-96 rounded-lg bg-transparent" />
          <div className="p-6 ">
            <h1 className="text-xl font-bold mb-4">Hi!, I'm</h1>
            <h1 className="md:text-3xl  text-xl font-serif font-semibold text-right italic text-amber-500 ">MU'AZAH AL'ADAWIYAH</h1>
            <p className="py-6 text-justify">
              You can call me Luna, I'm a front-end enthusiast with a passion for building interactive experiences. With a growing interest in graphic design, I'm excited to share my portfolio with you. Scroll down to explore my coding journey and see my ideas come to life.
            </p>
            <p className="text-amber-700 mb-20 italic">Let's Discover The Possibilities Together!</p>
            <a href="about" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
    </>
  )
}