"use client";
import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";
// import { motion } from "framer-motion";

const HeroSection = () => {
	const router = useRouter();

	return (
		<div
			id="hero"
			className="w-full bg-almond pl-8 md:pl-20 pt-[150px] md:pt-[180px] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0"
		>
			<div className="w-full md:w-[60%]">
				<h1 className="font-bricolage text-darkGrey text-[40px] md:text-[55px] font-bold leading-[50px] md:leading-[70px]">
					Empowering the future of tech enthusiasts through{" "}
					<span className="text-customRed">education</span> and{" "}
					<span className="text-customDarkRed">innovation</span>.
				</h1>
				<p className="mt-2 text-customDarkGrey">
					Empowering individuals with foundational and advanced tech
					skills.
				</p>
				<div className="mt-5 flex items-center gap-4">
					<CustomButton
						btnTitle="Register For Free Program"
						btnType="button"
						btnStyles="text-[12px] md:text-[14px] rounded-sm text-white border-none py-2 px-4 h-[48px] bg-customBlack cursor-pointer"
						btnAction={() => router.push("/")}
					/>
					<CustomButton
						btnTitle="Get A Personal Tutor"
						btnType="button"
						btnStyles="text-[12px] md:text-[14px] rounded-sm text-customBlack font-semibold border-2 py-2 px-4 h-[48px] bg-transparent border-customBlack cursor-pointer"
						btnAction={() => router.push("/")}
					/>
				</div>
				<div className="mt-5 flex items-center gap-4">
					<div className="flex flex-col gap-1 font-semibold">
						<p>+12k</p>
						<p>Tutors</p>
					</div>
					<div className="flex flex-col gap-1 font-semibold">
						<p>+12k</p>
						<p>Lessons</p>
					</div>
				</div>
			</div>

			<div className="heroBg w-full h-screen md:w-[50%] flex items-center justify-center">
				{/* <Image src={heroImage} alt="hero-image" className="" /> */}
			</div>
		</div>
	);
};

export default HeroSection;
