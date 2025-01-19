"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { brightflareLogo } from "@/assets/images";
import CustomButton from "../CustomButton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
	const [isScrolling, setIsScrolling] = useState<boolean>(false);
	const router = useRouter();

	const handleScrollDown = () => {
		if (window.scrollY >= 50) {
			setIsScrolling(true);
		} else {
			setIsScrolling(false);
		}
	};

	useEffect(() => {
		// Add the event listener when the component mounts
		window.addEventListener("scroll", handleScrollDown);

		// Cleanup event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScrollDown);
		};
	}, []);

	return (
		<div
			className={cn(
				"w-full px-8 md:px-16 py-2 flex items-center justify-between fixed z-10",
				isScrolling ? "bg-white" : "bg-almond"
				// isScrolling ? "backdrop-blur-md" : "bg-almond"
			)}
		>
			<Link href="/">
				<Image
					src={brightflareLogo}
					alt="brightflareLogo"
					className="h-12 w-32 md:h-16 md:w-40"
				/>
			</Link>
			<div className="hidden md:flex items-center gap-14">
				<div className="flex gap-10 items-center">
					<Link
						href="/"
						className="text-customBlack hover:text-customDarkGrey"
					>
						Home
					</Link>
					<Link
						href="/#about"
						className="text-customBlack hover:text-customDarkGrey"
					>
						About Us
					</Link>
					<Link
						href="/#courses"
						className="text-customBlack hover:text-customDarkGrey"
					>
						Courses
					</Link>
					<Link
						href="/#contact"
						className="text-customBlack hover:text-customDarkGrey"
					>
						Contact Us
					</Link>
				</div>
				<div className="flex items-center gap-3">
					<CustomButton
						btnTitle="Sponsor a Participant"
						btnType="button"
						btnStyles="text-[12px] md:text-[14px] rounded-sm text-customBlack border-[2px] py-2 md:py-3 px-4 bg-transparent border-customBlack cursor-pointer hover:border-customRed hover:bg-customRed hover:text-white"
						btnAction={() =>
							router.push("https://forms.gle/mVtGyV5fH67m6pb18")
						}
					/>
					<CustomButton
						btnTitle="Register"
						btnType="button"
						btnStyles="text-[12px] md:text-[14px] text-white rounded-sm border-[2px] border-customRed py-2 md:py-3 px-6 bg-customRed cursor-pointer hover:bg-customDarkRed hover:border-customDarkRed"
						btnAction={() =>
							router.push("https://forms.gle/MJ1iNDnCoD9HKVj9A")
						}
					/>
				</div>
			</div>
			<MobileMenu />
		</div>
	);
}
