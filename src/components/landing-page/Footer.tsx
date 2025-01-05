import Image from "next/image";
import Link from "next/link";
import {
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
	WhatsappIcon,
} from "@/assets/icons";
import { brightflareLogo } from "@/assets/images";

export default function Footer() {
	return (
		<>
			<div className="w-full bg-white text-black px-8 md:px-20 pt-20">
				<div className="flex flex-col md:flex-row justify-between gap-10">
					<div className="flex flex-col gap-4">
						<Image
							src={brightflareLogo}
							alt="footer-logo"
							className="h-16 w-40"
						/>
						<div className="flex flex-col">
							<p className="font-semibold">Address:</p>
							<p>Yaba, Lagos, Nigeria.</p>
						</div>
						<div className="mt-5 flex flex-col">
							<p className="font-semibold">Contact:</p>
							<div className="">
								<div className="flex flex-col">
									<div className="flex items-center gap-2">
										<span className="">Mobile:</span>
										+234 703 831 9232
									</div>
								</div>
								<p className="">
									brightflaretechnologies@gmail.com
								</p>
							</div>
						</div>
						<div className="mt-5 flex items-center gap-3">
							<Link
								href="https://x.com/BrightflareTech"
								target="_blank"
							>
								<Image src={TwitterIcon} alt="twitter-icon" />
							</Link>
							{/* <Link href="/" target="_blank">
								<Image src={FacebookIcon} alt="facebook-icon" />
							</Link> */}
							<Link
								href="https://www.instagram.com/brightflare_technologies?igsh=YnJycjVrZXQ1ZnEy"
								target="_blank"
							>
								<Image
									src={InstagramIcon}
									alt="instagram-icon"
								/>
							</Link>
							<Link
								href="https://www.linkedin.com/company/brightflare-tech-academy"
								target="_blank"
							>
								<Image
									src={LinkedInIcon}
									alt="instagram-icon"
								/>
							</Link>
							<Link
								href="https://wa.me/message/NLZX3GTSGSOCK1"
								target="_blank"
							>
								<Image
									src={WhatsappIcon}
									alt="instagram-icon"
								/>
							</Link>
						</div>
					</div>
					<div className="flex gap-20">
						<div className="flex flex-col gap-3">
							<Link href="/#about">About Us</Link>
							<Link href="/#courses">Courses</Link>
							<Link href="/#contact">Contact Support</Link>
							<Link
								href="https://forms.gle/kpmTPkc1XZvdesSh7"
								target="_blank"
							>
								Personal Tutor Form
							</Link>
						</div>
						<div className="flex flex-col gap-3">
							<Link href="/#faqs">FAQs Section</Link>
							<Link
								href="https://forms.gle/eEqkEUZew3vx87Ui6"
								target="_blank"
							>
								Tutor form
							</Link>
							<Link
								href="https://forms.gle/mVtGyV5fH67m6pb18"
								target="_blank"
							>
								Sponsorship Form
							</Link>
							<Link
								href="https://forms.gle/MJ1iNDnCoD9HKVj9A"
								target="_blank"
							>
								Registration Form
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-20 h-[1px] bg-black w-full"></div>
			<div className="mt-10 flex flex-col md:flex-row justify-between gap-5 px-8 md:px-10 pb-10">
				<p>© 2024 Brightflare. All rights reserved.</p>
				{/* <div className="flex flex-col md:flex-row gap-4">
					<Link href="/" className="underline">
						Privacy Policy
					</Link>
					<Link href="/" className="underline">
						Terms of Service
					</Link>
					<Link href="/" className="underline">
						Cookies Seetings
					</Link>
				</div> */}
			</div>
		</>
	);
}
