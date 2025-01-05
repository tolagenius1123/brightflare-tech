import { courses } from "@/assets/icons";
import Image from "next/image";

export default function Courses() {
	return (
		<div id="courses" className="bg-almond px-8 md:px-20 py-20">
			<div className="flex justify-around items-center">
				<h1 className="text-3xl md:text-4xl font-semibold">
					Our Courses
				</h1>
			</div>
			<div className="mt-10 md:mt-2 flex flex-col md:flex-row items-center text-darkGrey">
				<div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 text-customBlack text-nowrap gap-4">
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						Web Development
					</div>
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						Backend Development
					</div>
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						Mobile Development
					</div>
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						Web 3
					</div>
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						QA/Quality Assurance
					</div>
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						Data Analysis
					</div>
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						UI/UX Design
					</div>
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						Data Analysis
					</div>
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						Project Management
					</div>
					<div className="w-full md:w-[250px] bg-white px-2 py-2 text-[14px] md:text-[16px]">
						Cybersecurity
					</div>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image src={courses} alt="courses" className="" />
				</div>
			</div>
		</div>
	);
}
