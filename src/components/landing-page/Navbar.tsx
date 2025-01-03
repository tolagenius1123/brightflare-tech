"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { brightflareLogo } from "@/assets/images";
import CustomButton from "../CustomButton";

export default function Navbar() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<div className="w-full bg-almond px-8 md:px-20 py-2 flex items-center justify-between fixed z-10 shadow-md">
			<Link href="/">
				<Image
					src={brightflareLogo}
					alt="brightflareLogo"
					height={200}
					width={200}
				/>
			</Link>
			<div className="hidden md:flex items-center gap-14">
				<div className="flex gap-10 items-center">
					<Link
						href="/"
						className={`${
							pathname === "/"
								? "text-darkGrey"
								: " text-lightGrey"
						} hover:text-darkGrey`}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={`${
							pathname === "/about"
								? "text-darkGrey"
								: " text-lightGrey"
						} hover:text-darkGrey`}
					>
						About Us
					</Link>
					<Link
						href="/#services"
						className={`${
							pathname === "/#services"
								? "text-darkGrey"
								: " text-lightGrey"
						} hover:text-darkGrey`}
					>
						Courses
					</Link>
					<Link
						href="/#contact"
						className={`${
							pathname === "/#contact"
								? "text-darkGrey"
								: " text-lightGrey"
						} hover:text-darkGrey`}
					>
						Contact Us
					</Link>
				</div>
				<CustomButton
					btnTitle="Register"
					btnType="button"
					btnStyles="text-white rounded-sm border-none w-[110px] h-[50px] bg-customRed cursor-pointer"
					btnAction={() => router.push("/")}
				/>
			</div>
			{/* <MobileMenu /> */}
		</div>
	);
}
