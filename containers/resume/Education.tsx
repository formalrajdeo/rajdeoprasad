import { PERSONAL_DATA } from '@/constants/PERSONAL_DATA'
import React from 'react'

const Education = () => {
    return (
      <div className="flex flex-col justify-center pr-8 mt-4">
        <div className="border-t-0 border-l-0 border-r-0 border-b border-black py-2">
          <span className="font-semibold">Education</span>
        </div>
  
        {PERSONAL_DATA.EDUCATION.map((edu, edu_idx) => {
          return (
            <div key={edu_idx} className="mt-4 border-t-0 border-r-0 border-b-0 border-l border-black pl-2">
              <div className="flex justify-between items-center text-sm py-2">
                <div>
                  <div>
                    <span>{edu.degree}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">{edu.college_name}</span>
                  </div>
                </div>
                <div>
                  <span className="text-blue-700">{edu.from_date} - {edu.to_date}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
export default Education