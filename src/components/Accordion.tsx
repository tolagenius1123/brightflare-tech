"use client";
import { ChevronRight } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

type Data = {
	id: number;
	question: string;
	answer: ReactNode;
	active?: number | undefined;
};

type AccordionProps = {
	question: string;
	answer: ReactNode;
	data: Data;
};

const Accordion = ({ question, answer, data }: AccordionProps) => {
	// Set initial state to match server-rendered version
	const [item, setItem] = useState<Data>({
		...data,
		active: data.active ?? 0,
	});

	const handleToggle = () => {
		const newActive = item.active === 1 ? 0 : 1;
		setItem({ ...item, active: newActive });
	};

	useEffect(() => {
		// Sync state after mount, if needed, to avoid hydration mismatch
		setItem((prev) => ({ ...prev, active: data.active ?? 0 }));
	}, [data.active]);

	return (
		<div
			className={`bg-almond w-full px-2 py-3 border border-black border-l-0 border-r-0 border-b-0 duration-500 group ${
				item.active === 1 ? "is-active" : ""
			}`}
		>
			<div className="mt-2 flex flex-col gap-4">
				<div className="flex items-center gap-3">
					<p className="w-full text-[12px] md:text-[14px] group-[.is-active]:font-bold duration-500">
						{question}
					</p>
					<div
						className="text-lg rotate-90 group-[.is-active]:rotate-[270deg] duration-500 cursor-pointer"
						onClick={handleToggle}
					>
						<ChevronRight />
					</div>
				</div>
				<div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] duration-500 text-[12px] md:text-[14px]">
					{answer}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
