"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ada, bright, musa, joy } from "@/assets/images";
import CustomButton from "@/components/CustomButton";

export default function Team() {
	const router = useRouter();
	return (
		<div className="bg-white px-8 md:px-20 py-20">
			<div className="flex justify-around items-center">
				<h1 className="text-3xl md:text-4xl font-semibold">
					Meet Our Team
				</h1>
			</div>
			<div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
				<div className=" cursor-pointer">
					<Image src={bright} alt="team-image" className="w-full" />
				</div>
				<div className=" cursor-pointer">
					<Image src={joy} alt="team-image" className="w-full" />
				</div>
				<div className=" cursor-pointer">
					<Image src={ada} alt="team-image" className="w-full" />
				</div>
				<div className=" cursor-pointer">
					<Image src={musa} alt="team-image" className="w-full" />
				</div>
			</div>
			<div className="mt-10 flex justify-around">
				<div className="flex items-center gap-4">
					<CustomButton
						btnTitle="Join the Tutor Waiting List"
						btnType="button"
						btnStyles="text-[12px] md:text-[14px] rounded-sm text-white border-none py-2 px-4 h-[48px] bg-customBlack cursor-pointer"
						btnAction={() => router.push("/")}
					/>
					<CustomButton
						btnTitle="Sponsor a Learner"
						btnType="button"
						btnStyles="text-[12px] md:text-[14px] rounded-sm text-customBlack font-semibold border-2 py-2 px-4 h-[48px] bg-transparent border-customBlack cursor-pointer"
						btnAction={() => router.push("/")}
					/>
				</div>
			</div>
		</div>
	);
}
