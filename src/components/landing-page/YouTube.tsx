import Link from 'next/link';

export default function YouTube() {
    return (
        <div className="bg-white px-8 md:px-20 py-20">
            <div className="flex justify-around items-center">
                <h1 className="text-3xl md:text-4xl">Know more about us</h1>
            </div>
            <div className="mt-10 flex justify-around items-center">
                <iframe className="w-full h-[300px] md:h-[500px] rounded-md cursor-pointer border-none"
                        src="https://www.youtube.com/embed/oqpNI9ECE_c?si=O28_KHC7wZ-ejVTC"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
            <div className="mt-5 flex justify-around">
                <Link href="https://www.youtube.com/@BrightflareTechAcademy" target="_blank" className="text-[12px] md:text-[14px] rounded-sm text-white border-none py-4 px-4 bg-customBlack cursor-pointer">
                    Subscribe to Our Channel
                </Link>
            </div>
        </div>
    )
}
