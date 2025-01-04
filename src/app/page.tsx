import AboutUs from "@/components/landing-page/AboutUs";
import Courses from "@/components/landing-page/Courses";
import HeroSection from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/Navbar";
import Team from "@/components/landing-page/Team";
import FaQs from "@/components/landing-page/FAQs";
import ContactUs from "@/components/landing-page/ContactUs";
import YouTube from "@/components/landing-page/YouTube";
import Footer from "@/components/landing-page/Footer";

export default function Home() {
	return (
		<main className="h-auto w-full">
			<Navbar />
			<HeroSection />
			<AboutUs />
			<Courses />
			<Team />
			<YouTube />
			<FaQs />
			<ContactUs />
			<Footer />
		</main>
	);
}
