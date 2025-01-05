"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import { brightflareLogo } from "@/assets/images";

export default function MobileMenu() {
	const router = useRouter();

	return (
		<div className="md:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<AlignRight className="h-8 w-8 text-customBlack" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>
							<Image
								src={brightflareLogo}
								alt="brightflareLogo"
								className="h-12 w-32 md:h-16 md:w-40"
							/>
						</SheetTitle>
						<SheetDescription>{""}</SheetDescription>
					</SheetHeader>
					<div className="mt-5">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-4">
								<Link
									href="/"
									className="text-customBlack hover:text-customDarkGrey"
								>
									<SheetClose>Home</SheetClose>
								</Link>
								<Link
									href="/#about"
									className="text-customBlack hover:text-customDarkGrey"
								>
									<SheetClose>About</SheetClose>
								</Link>
								<Link
									href="/#courses"
									className="text-customBlack hover:text-customDarkGrey"
								>
									<SheetClose>Courses</SheetClose>
								</Link>
								<Link
									href="/#contact"
									className="text-customBlack hover:text-customDarkGrey"
								>
									<SheetClose>Contact Us</SheetClose>
								</Link>
							</div>
							<CustomButton
								btnTitle="Register"
								btnType="button"
								btnStyles="text-white rounded-sm border-none w-[110px] h-[50px] bg-customRed cursor-pointer"
								btnAction={() =>
									router.push(
										"https://forms.gle/MJ1iNDnCoD9HKVj9A"
									)
								}
							/>
						</div>
					</div>
					{/* <SheetFooter>
						<SheetClose asChild>
							<button type="submit">Save changes</button>
						</SheetClose>
					</SheetFooter> */}
				</SheetContent>
			</Sheet>
		</div>
	);
}
