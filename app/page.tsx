import Image from "next/image";
import ProfileImg from '../assets/image/profile.jpeg'
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center mt-4 pr-8 max-sm:pr-0 w-full">
      <div className="border-t-0 border-l-0 border-r-0 border-b border-black py-2">
        <span className="font-semibold">Profile</span>
      </div>
      <div
        className="my-8 py-8 px-8 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        {/* <Image className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" priority={true} src={ProfileImg} alt="" width={100} height={300} /> */}
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Rajdeo Prasad
            </p>
            <p className="text-slate-500 font-medium text-sm">
              Highly skilled and results-oriented Software Developer with over 3 years of experience in web development, backend solutions, and cloud infrastructure. Expertise in building scalable, high-performance applications using technologies such as JavaScript, Node.js, React, MongoDB, and AWS. Proficient in developing innovative software solutions across various industries, including e-commerce, insurance, and banking. Seeking new opportunities to leverage technical expertise in full-stack development and cloud architecture.
            </p>
          </div>
          <div className="">
            <Link href='/contact' className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
