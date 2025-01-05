"use client";
import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";
import { heroImage } from "@/assets/images";

const HeroSection = () => {
	const router = useRouter();

	return (
		<div
			id="hero"
			className="w-full bg-almond  pt-[150px] md:pt-[180px] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0"
		>
			<div className="w-full md:w-[60%] px-8 md:px-20">
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
						btnStyles="text-[12px] md:text-[14px] rounded-sm text-white border-none py-2 md:py-4 px-4 bg-customBlack cursor-pointer"
						btnAction={() =>
							router.push("https://forms.gle/MJ1iNDnCoD9HKVj9A")
						}
					/>
					<CustomButton
						btnTitle="Get A Personal Tutor"
						btnType="button"
						btnStyles="text-[12px] md:text-[14px] rounded-sm text-customBlack font-semibold border-2 py-2 md:py-4 px-4 bg-transparent border-customBlack cursor-pointer"
						btnAction={() =>
							router.push("https://forms.gle/kpmTPkc1XZvdesSh7")
						}
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

			<div
				className="w-full h-[400px] md:h-screen md:w-[50%] flex items-center justify-center"
				style={{
					backgroundImage: `url(${heroImage.src})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* <Image src={heroImage} alt="hero-image" className="" /> */}
			</div>
		</div>
	);
};

export default HeroSection;
