import { PERSONAL_DATA } from '@/constants/PERSONAL_DATA'
import React from 'react'

const Employee = () => {
    return (
        <div className="flex flex-col justify-center mt-4 pr-8 max-sm:pr-0">
            <div className="border-t-0 border-l-0 border-r-0 border-b border-black py-2">
                <span className="font-semibold">Employment</span>
            </div>
            {PERSONAL_DATA.EMPLOYEE.map((emp, emp_idx) => {
                return (
                    <div key={emp_idx} className="mt-6 border-t-0 border-r-0 border-b-0 border-l border-black pl-2">
                        <div className="flex justify-between items-center text-sm py-2">
                            <div>
                                <div>
                                    <span>{emp.company_name}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">{emp.designation}</span>
                                </div>
                            </div>
                            <div>
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

export default Employee