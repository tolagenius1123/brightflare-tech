"use client";
import { useRouter } from "next/navigation";
import { Wale, Demola, Adebisi, Tola } from "@/assets/images";
import CustomButton from "@/components/CustomButton";
import TeamCard from "./TeamCard";

export default function Team() {
	const router = useRouter();

	const teamList = [
		{
			id: 1,
			image: Wale,
			fullname: "Adewale Adeyinka",
			role: "Software Engineer",
		},
		{
			id: 2,
			image: Demola,
			fullname: "Demola Martins",
			role: "Technical Product Manager",
		},
		{
			id: 3,
			image: Adebisi,
			fullname: "Adebisi Adeyinka",
			role: "Quality Assurance Engineer",
		},
		{
			id: 4,
			image: Tola,
			fullname: "Omotola Jinadu",
			role: "Software Engineer",
		},
	];

	return (
		<div className="bg-white px-8 md:px-20 py-20">
			<div className="flex justify-around items-center">
				<h1 className="text-3xl md:text-4xl font-semibold">
					Meet Our Team
				</h1>
			</div>
			{/* <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
				<div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
					<Image src={bright} alt="team-image" className="w-full" />
				</div>
				<div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
					<Image src={joy} alt="team-image" className="w-full" />
				</div>
				<div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
					<Image src={ada} alt="team-image" className="w-full" />
				</div>
				<div className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
					<Image src={musa} alt="team-image" className="w-full" />
				</div>
			</div> */}
			<div className="mt-5 md:mt-10 w-full grid grid-cols-1 md:grid-cols-4 gap-10 items-center justify-items-center">
				{teamList.map((team) => (
					<div className="" key={team.id}>
						<TeamCard key={team.id} team={team} />
					</div>
				))}
			</div>
			<div className="mt-10 flex justify-around">
				<div className="flex items-center gap-4">
					<CustomButton
						btnTitle="Join the Tutor Waiting List"
						btnType="button"
						btnStyles="text-[12px] md:text-[14px] rounded-sm text-white border-none py-2 md:py-4 px-4 bg-customBlack cursor-pointer"
						btnAction={() =>
							router.push("https://forms.gle/eEqkEUZew3vx87Ui6")
						}
					/>
					<CustomButton
						btnTitle="Sponsor a Learner"
						btnType="button"
						btnStyles="text-[12px] md:text-[14px] rounded-sm text-customBlack font-semibold border-2 py-2 md:py-4 px-4 bg-transparent border-customBlack cursor-pointer"
						btnAction={() =>
							router.push("https://forms.gle/mVtGyV5fH67m6pb18")
						}
					/>
				</div>
			</div>
		</div>
	);
}
