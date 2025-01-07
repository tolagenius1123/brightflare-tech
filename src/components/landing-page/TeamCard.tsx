import Image, { StaticImageData } from "next/image";

type TeamCardProps = {
	team: {
		id: number;
		image: StaticImageData;
		fullname: string;
		role: string;
	};
};

export default function TeamCard({ team }: TeamCardProps) {
	const { id, image, fullname, role } = team;

	return (
		<div
			key={id}
			className="w-full flex flex-col gap-3 text-darkGrey cursor-pointer transform transition-transform duration-300 hover:scale-105"
		>
			<Image
				src={image}
				alt="team-member"
				className="w-full h-[300px] rounded-lg"
			/>
			<div className="">
				<h1 className="text-lg font-bold">{fullname}</h1>
				<p className="text-sm">{role}</p>
			</div>
		</div>
	);
}
