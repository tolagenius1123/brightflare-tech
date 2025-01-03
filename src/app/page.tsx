import AboutUs from "@/components/landing-page/AboutUs";
import Courses from "@/components/landing-page/Courses";
import HeroSection from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/Navbar";
import Team from "@/components/landing-page/Team";
import FaQs from "@/components/landing-page/FAQs";

export default function Home() {
	return (
		<main className="h-auto w-full">
			<Navbar />
			<HeroSection />
			<AboutUs />
			<Courses />
			<Team />
			<FaQs/>
		</main>
	);
}
