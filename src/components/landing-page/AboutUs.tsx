"use client";
import Image from "next/image";
import { aboutUsImage } from "@/assets/icons";
import { motion } from "framer-motion";

const AboutUs = () => {
	return (
		<div
			id="about"
			className="bg-white px-8 md:px-20 py-20 flex flex-col md:flex-row gap-10 md:gap-20"
		>
			{/* {LEFT} */}
			<motion.div
				className="w-full md:w-1/2"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<Image
					src={aboutUsImage}
					alt="about-image"
					className="rounded-sm w-full"
				/>
			</motion.div>
			{/* {RIGHT} */}
			<motion.div
				className="w-full md:w-1/2"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<div className="flex justify-between items-center"></div>
				<h1 className="text-3xl md:text-4xl text-customBlack font-semibold">
					About Us
				</h1>
				<div className="">
					<p className="mt-3 md:mt-4 text-[12px] md:text-[14px] text-customDarkGrey">
						Brightflare Technologies has evolved into a dynamic
						educational platform dedicated to transforming lives
						through technology.
						<span className="bg-customDarkRed text-white">
							Our flagship initiative, Brightflare Tech Academy,
							is committed to empowering individuals at all skill
							levels—whether they are stepping into tech for the
							first time or seeking advanced expertise.
						</span>
					</p>
					<br />
					<p className="text-[12px] md:text-[14px] text-customDarkGrey">
						At Brightflare Tech Academy, we believe in breaking down
						barriers to entry in the tech industry. We offer a
						diverse range of programs designed to meet different
						learning needs:
					</p>
					<br />
					<p className="text-[12px] md:text-[14px] text-customDarkGrey">
						Free Programs: Community-driven initiatives that provide
						accessible learning opportunities, ensuring that
						financial limitations do not stand in the way of
						aspiring tech professionals.
					</p>
					<br />
					<p className="text-[12px] md:text-[14px] text-customDarkGrey">
						Paid Programs: Comprehensive, structured courses that
						span several months, offering in-depth training and
						mentorship from industry experts.
					</p>
					<br />
					<p className="text-[12px] md:text-[14px] text-customDarkGrey">
						Additionally, our innovative private tutorship service
						operates as a match-making platform, similar to how
						dating apps connect individuals. This service pairs
						prospective students with experienced tutors, ensuring
						personalized learning journeys tailored to individual
						goals and preferences.
					</p>
					<br />
					<div className="text-[12px] md:text-[14px] text-customDarkGrey">
						Whether through our free learning sessions or immersive
						paid courses, Brightflare Tech Academy is dedicated to
						building a community of skilled, confident, and
						tech-savvy individuals ready to make an impact in the
						ever-evolving digital world.
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutUs;
