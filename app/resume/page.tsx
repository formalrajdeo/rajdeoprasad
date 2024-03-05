import Education from "@/containers/resume/Education";
import Employee from "@/containers/resume/Employee";
import ProgrammingLang from "@/containers/resume/ProgrammingLang";
import Skills from "@/containers/resume/Skills";

export default function Resume() {
  return (
    <>
      <div className="w-3/4 max-sm:w-full max-md:w-3/5">
        <Employee />
        <Education />
      </div>
      <div className="w-3/12 max-sm:w-full max-md:w-2/5">
        <ProgrammingLang />
        <Skills />
      </div>
    </>
  )
}
