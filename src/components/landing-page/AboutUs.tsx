import Image from "next/image";
import { aboutImage } from "@/assets/images";
import { aboutUsImage } from "@/assets/icons";

export default function AboutUs() {
	return (
		<div className="bg-white px-8 md:px-20 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-20">
			<div className="w-full md:w-1/2 flex items-center justify-center">
				<Image
					src={aboutUsImage}
					alt="about-image"
					className="rounded-sm w-full"
				/>
			</div>
			<div className="w-full md:w-1/2">
				<div className="flex justify-between items-center"></div>
				<h1 className="text-3xl md:text-4xl font-medium text-customBlack">
					About Us
				</h1>
				<p className="mt-3 md:mt-4 text-[14px] md:text-[16px] text-customDarkGrey">
					Brightflare Technologies was initially established as a
					renewable energy company focused on providing innovative
					solar energy solutions. Recently, the company expanded its
					vision by introducing an educational arm,
					<span className="bg-customDarkRed text-white">
						Brightflare Tech Academy, aimed at empowering
						individuals with foundational and advanced tech skills.
					</span>
					The academy addresses barriers to entry in the tech
					industry, offering both free and paid training programs.
				</p>
			</div>
		</div>
	);
}
