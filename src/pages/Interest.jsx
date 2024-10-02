import { FaStar } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
export default function Interest() {
  return (
    <>
      <div className="container mx-auto p-8">
          <div className="text-center p-4">
            <h1 className="text-xl font-bold my-6">
              INTEREST
            </h1>
            <h1 className="text-3xl font-serif italic">
              What I'm <span className="text-amber-500"> Passionate </span> About
            </h1>
            <hr className="mt-4 mx-auto border-b-4 rounded-xl w-24 border-amber-700" />
          </div>
          <div className="text-center text-sm md:p-0 p-6 my-10">
            <p>
              I am deeply passionate about the intersection of technology, culinary food, and fashion, where creativity and innovation come to life in dynamic ways. This unique blend inspires me to explore new ideas and push boundaries, allowing me to merge my interests into a cohesive creative vision. In my free time, I find joy in expressing myself through sketching and writing, activities that enable me to tap into my creative potential and develop a keen attention to detail. Whether it's sketching designs or penning down thoughts and ideas, these creative outlets provide me with a sense of fulfillment and inspiration.
            </p>
            <br />
            <p>
              Additionally, I am a sports enthusiast who enjoys staying active and energized through various physical activities. I love playing badminton, swimming, and jogging, all of which not only help me maintain my physical health but also provide a great way to clear my mind and rejuvenate my spirit. These activities instill a sense of discipline and focus in my life, qualities that I carry over into my professional endeavors.
            </p>
            <br />
            <p>
              With a strong passion for user experience design, I am dedicated to creating beautiful and functional digital products that resonate with users. As I continue to learn and grow as a front-end developer, I am committed to bridging the gap between design and code, ensuring that the user experience is seamless and intuitive. I thrive on the challenge of transforming innovative ideas into practical solutions that inspire and delight users. My journey in the tech world is fueled by a desire to make a positive impact through thoughtful design and user-centric development.
            </p>
            <div className="flex justify-end items-center mt-8">
              <div className="flex">
                <FaStar className="w-1 h-1"/>
                <FaStar className="w-1 h-1"/>
                <FaStar className="w-1 h-1"/>
              </div>
              <h1 className="textarea-xs font-serif font-semibold text-right italic text-amber-500">Gratitude turns what we have into enough
              </h1>
              <div className="flex">
                <FaStar className="w-1 h-1"/>
                <FaStar className="w-1 h-1"/>
                <FaStar className="w-1 h-1"/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}