import { MAX_RATING_LIMIT, PERSONAL_DATA } from '@/constants/PERSONAL_DATA'
import React from 'react'

const ProgrammingLang = () => {
    return (
        <div className="flex flex-col justify-center my-4">
            <div className="border-t-0 border-l-0 border-r-0 border-b border-black py-2">
                <span className="font-semibold">{PERSONAL_DATA.PROGRAMMING_LANGUAGES.title}</span>
            </div>
            <div className="mt-2 flex flex-col">
                {PERSONAL_DATA.PROGRAMMING_LANGUAGES.value.map((prog_lang, prog_lang_idx) => {
                    return (
                        <div key={prog_lang_idx} className="flex justify-between items-center text-sm py-2">
                            <div>
                                <span className='text-xs'>{prog_lang.name}</span>
                            </div>
                            <div className="flex justify-between items-center gap-1">
                                {[...Array(prog_lang.rating)].map((_, index) => (
                                    <div key={index} className="w-4 h-4 rounded-full bg-gray-500"></div>
                                ))}
                                {[...Array(MAX_RATING_LIMIT - prog_lang.rating)].map((_, index) => (
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
export default ProgrammingLang