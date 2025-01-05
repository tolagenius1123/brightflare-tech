import Accordion from "@/components/Accordion";
import faqList from "@/data/FaqList";

export default function FaQs() {
	return (
		<>
			<div
				id="faqs"
				className="w-full bg-almond px-8 md:px-20 py-20 text-black"
			>
				<h1 className="text-2xl md:text-4xl font-semibold">FAQs</h1>
				<p className="mt-5">
					Find answers to your most pressing questions about our
					recruitment services and processes.
				</p>
				<div className="mt-10 flex flex-col gap-4">
					{faqList.map((item, i) => (
						<Accordion
							key={i}
							question={item.question}
							answer={item.answer}
							data={item}
						/>
					))}
				</div>
			</div>
		</>
	);
}
