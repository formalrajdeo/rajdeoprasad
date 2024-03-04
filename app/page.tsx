import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaGithub } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { IoIosContact, IoMdMail } from "react-icons/io";
import Link from "next/link";
import { PERSONAL_DATA } from '../constants/PERSONAL_DATA'

const HEADER = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="">
        <div className="">
          <span className="font-semibold text-3xl">RAJDEO PRASAD</span>
        </div>
        <div className="flex justify-between items-center">
          <div className=""><span>DEVELOPER</span></div>
          <div className="px-2 mx-2 border-t-0 border-b-0 border-l border-r border-black">
            <span>YOUTUBER</span>
          </div>
          <div className=""><span>TEACHER</span></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-black text-white p-2 m-1">
          <Link href="#">
            <FaFacebookSquare />
          </Link>
        </div>
        <div className="bg-black text-white p-2 m-1">
          <Link href="#">
            <FaTwitterSquare />
          </Link>
        </div>
        <div className="bg-black text-white p-2 m-1">
          <Link href="#">
            <FaYoutube />
          </Link>
        </div>
        <div className="bg-black text-white p-2 m-1">
          <Link href="#">
            <FaGithub />
          </Link>
        </div>
      </div>
    </header>
  )
}
const NAVIGATION = () => {
  return (
    <div className="my-4">
      <ul className="flex justify-center items-center gap-4 bg-gray-200">
        <li className="flex flex-col px-8 py-4 justify-center items-center hover:bg-gray-300 hover:cursor-pointer">
          <div className="">
            <IoIosContact size={50} color="gray" />
          </div>
          <div className="">
            <Link href="#">Profile</Link>
          </div>
        </li>
        <li className="flex flex-col px-8 py-4 justify-center items-center">
          <div className="">
            <IoDocument size={50} color="gray" />
          </div>
          <div className="">
            <Link href="#">Resume</Link>
          </div>
        </li>
        <li className="flex flex-col px-8 py-4 justify-center items-center">
          <div className="">
            <IoMdMail size={50} color="gray" />
          </div>
          <div className="">
            <Link href="#">Contact</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}
const EMPLOYEE = () => {
  return (
    <div className="flex flex-col justify-center pr-8 mt-4">
      <div className="border-t-0 border-l-0 border-r-0 border-b border-black py-2">
        <span className="font-semibold">Employment</span>
      </div>

      {PERSONAL_DATA.EMPLOYEE.map((emp, emp_idx) => {
        return (
          <div key={emp_idx} className="mt-2 border-t-0 border-r-0 border-b-0 border-l border-black pl-2">
            <div className="flex justify-between items-center text-sm py-2">
              <div className="">
                <div className="">
                  <span>{emp.company_name}</span>
                </div>
                <div className="">
                  <span className="text-gray-500">{emp.designation}</span>
                </div>
              </div>
              <div className="">
                <span className="text-blue-700">{emp.from_date} - {emp.to_date}</span>
              </div>
            </div>
            <p className="text-xs">
              {emp.role_description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

const EDUCATION = () => {
  return (
    <div className="flex flex-col justify-center pr-8 mt-4">
      <div className="border-t-0 border-l-0 border-r-0 border-b border-black py-2">
        <span className="font-semibold">Education</span>
      </div>

      {PERSONAL_DATA.EDUCATION.map((edu, edu_idx) => {
        return (
          <div key={edu_idx} className="mt-2 border-t-0 border-r-0 border-b-0 border-l border-black pl-2">
            <div className="flex justify-between items-center text-sm py-2">
              <div className="">
                <div className="">
                  <span>{edu.degree}</span>
                </div>
                <div className="">
                  <span className="text-gray-500">{edu.college_name}</span>
                </div>
              </div>
              <div className="">
                <span className="text-blue-700">{edu.from_date} - {edu.to_date}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const PROGRAMMING_LANGUAGE = () => {
  return (
    <div className="flex flex-col justify-center mb-4">
      <div className="border-t-0 border-l-0 border-r-0 border-b border-black py-2">
        <span className="font-semibold">{PERSONAL_DATA.PROGRAMMING_LANGUAGES.title}</span>
      </div>
      <div className="mt-2 flex flex-col">
        {PERSONAL_DATA.PROGRAMMING_LANGUAGES.value.map((prog_lang, prog_lang_idx) => {
          return (
            <div key={prog_lang_idx} className="flex justify-between items-center text-sm py-2">
              <div className="">
                <span>{prog_lang.name}</span>
              </div>
              <div className="flex justify-between items-center gap-1">
                {[...Array(prog_lang.rating)].map((_, index) => (
                  <div key={index} className="w-4 h-4 rounded-full bg-gray-500"></div>
                ))}
                {[...Array(7 - prog_lang.rating)].map((_, index) => (
                  <div key={index} className="w-4 h-4 rounded-full bg-gray-300"></div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const SKILLS = () => {
  return (
    <>
      {PERSONAL_DATA.SKILLS.map((skill, skill_idx) => {
        return (
          <div key={skill_idx} className="flex flex-col justify-center mb-4">
            <div className="border-t-0 border-l-0 border-r-0 border-b border-black py-2">
              <span className="font-semibold">{skill.title}</span>
            </div>
            {skill.value.map((skill_data, skill_data_idx) => {
              return (
                <div key={skill_data_idx} className="mt-2">
                  <div className="flex justify-between items-center text-sm py-2">
                    <div className="">
                      <span>{skill_data.name}</span>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                      {[...Array(skill_data.rating)].map((_, index) => (
                        <div key={index} className="w-4 h-4 rounded-full bg-gray-500"></div>
                      ))}
                      {[...Array(7 - skill_data.rating)].map((_, index) => (
                        <div key={index} className="w-4 h-4 rounded-full bg-gray-300"></div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

const FOOTER = () => {
  return (
    <footer className="bg-slate-600 mt-4 w-full h-6">
    </footer>
  )
}
export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col pt-12">
      <div className="w-11/12">
        <HEADER />
        <NAVIGATION />
        <div className="flex justify-between items-center">
          <div className="w-3/4">
            <EMPLOYEE />
            <EDUCATION />
          </div>
          <div className="w-3/12">
            <PROGRAMMING_LANGUAGE />
            <SKILLS />
          </div>
        </div>
      </div>
      <FOOTER />
    </div>
  );
}
