import { MAX_RATING_LIMIT, PERSONAL_DATA } from '@/constants/PERSONAL_DATA'
import React from 'react'

const Skills = () => {
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
                                        <div>
                                            <span className='text-xs'>{skill_data.name}</span>
                                        </div>
                                        <div className="flex justify-between items-center gap-1">
                                            {[...Array(skill_data.rating)].map((_, index) => (
                                                <div key={index} className="w-4 h-4 rounded-full bg-gray-500"></div>
                                            ))}
                                            {[...Array(MAX_RATING_LIMIT - skill_data.rating)].map((_, index) => (
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

export default Skills