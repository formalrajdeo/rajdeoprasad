import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center mt-4 pr-8 max-sm:pr-0 w-full">
            <div className="border-t-0 border-l-0 border-r-0 border-b border-black py-2">
                <span className="font-semibold">Contact Us</span>
            </div>
            <div className="mt-6 border-t-0 border-r-0 border-b-0 border-l border-black pl-2">
                <div className="flex justify-between items-center text-sm py-2">
                    <div>
                        <span>Presently in Mumbai</span>
                    </div>
                </div>
                <div className="mt-4">
                    <ul className="text-xs">
                        <li><span className="font-semibold">Email:</span> formal.rajdeo@gmail.com</li>
                        <li><span className="font-semibold">Phone:</span> +91 XXX-XXX-XXXX</li>
                        <li><span className="font-semibold">Website:</span> <Link className="text-blue-700 font-semibold" target="_blank" href='https://formalrajdeo.github.io/rajdeoprasad/'>www.rajdeo.com</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
