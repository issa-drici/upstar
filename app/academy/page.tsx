/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronRight, FaCircleExclamation, FaHourglassEnd, FaRegCircle, FaVideo } from "react-icons/fa6";

export default function Home() {
    return (
        <>
            <div className="flex flex-col md:flex-row border-b border-solid border-[#e5e5e5] py-5 px-7 gap-4 md:gap-10">
                <Image
                    src="/assets/video.png"
                    alt="Vercel logomark"
                    width={727}
                    height={404}
                    className="md:max-w-80 md:h-52 rounded-2xl"
                />
                <div className="flex flex-col gap-3 md:gap-4">
                    <p className="text-3xl font-medium">Upstar academy</p>
                    <p className="text-[#696969] max-w-96 text-sm md:text-base">The Upstar Academy guides you step-by-step to grow  your Instagram account organically</p>
                    <Link href="/academy/course-1" className="bg-gradient-to-r from-[#a46ef3] via-[#ff77ac] to-[#fcaa74] w-fit text-white text-lg px-3 py-1 rounded-xl border border-solid">Start course</Link>
                    <div className="flex gap-4 items-center">
                        <div className="flex space-x-[-15px]">
                            <div className="md:w-12 md:h-12 w-10 h-10 rounded-full overflow-hidden shadow-lg">
                                <img src="https://thispersondoesnotexist.com?1" alt="Image 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="md:w-12 md:h-12 w-10 h-10 rounded-full overflow-hidden shadow-lg">
                                <img src="https://thispersondoesnotexist.com?2" alt="Image 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="md:w-12 md:h-12 w-10 h-10 rounded-full overflow-hidden shadow-lg">
                                <img src="https://thispersondoesnotexist.com?3" alt="Image 3" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <p className="text-[#696969] leading-5">Course followed<br />by 500+ students</p>
                    </div>
                </div>
            </div>
            <div className="flex py-8 px-7 gap-10 flex-col md:flex-row">
                <div className="flex min-w-80 bg-white border border-solid border-[#e5e5e5] h-fit rounded-2xl px-5 py-6 flex-col gap-2">
                    <p className="font-medium mb-2">Summary</p>
                    <div className="flex items-center justify-between border border-solid border-[#e5e5e5] py-3 px-4 rounded-xl">
                        <div className="flex items-center gap-2">
                            <FaVideo color="#a69898" />
                            <p>Videos</p>
                        </div>
                        <p className="font-medium text-[#a69898]">19</p>
                    </div>
                    <div className="flex items-center justify-between border border-solid border-[#e5e5e5] py-3 px-4 rounded-xl">
                        <div className="flex items-center gap-2">
                            <FaHourglassEnd color="#a69898" />
                            <p>Duration</p>
                        </div>
                        <p className="font-medium text-[#a69898]">3h 54m</p>
                    </div>
                    <div className="flex items-center justify-between border border-solid border-[#e5e5e5] py-3 px-4 rounded-xl">
                        <div className="flex items-center gap-2">
                            <FaCircleExclamation color="#a69898" />
                            <p>Difficulty</p>
                        </div>
                        <p className="font-medium text-[#a69898]">Easy</p>
                    </div>
                    <Link href="/academy/course-1" className="bg-gradient-to-r from-[#a46ef3] via-[#ff77ac] to-[#fcaa74] text-white text-lg px-3 py-1 rounded-xl border border-solid text-center mt-2">Start course</Link>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full gap-2 mb-7">
                        <p className="font-medium">I. Lorem Ipsum</p>
                        <div className="flex items-center w-full justify-between border border-solid border-[#e5e5e5] bg-white hover:bg-[#fbfbfb] cursor-pointer py-1 px-3 md:py-3 md:px-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <FaCheckCircle color="#a69898" />
                                <Image
                                    src="/assets/video.png"
                                    alt="Vercel logomark"
                                    width={727}
                                    height={404}
                                    className="w-14 md:w-20 h-auto rounded-sm md:rounded-lg"
                                />
                                <p className="font-medium text-xs">To watch before you start</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#a69898] text-xs md:text-base">11m 40s</p>
                                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" color="#a69898" />
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between border border-solid border-[#e5e5e5] bg-white hover:bg-[#fbfbfb] cursor-pointer py-1 px-3 md:py-3 md:px-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <FaRegCircle color="#a69898" />
                                <Image
                                    src="/assets/video.png"
                                    alt="Vercel logomark"
                                    width={727}
                                    height={404}
                                    className="w-14 md:w-20 h-auto rounded-sm md:rounded-lg"
                                />
                                <p className="font-medium text-xs">To watch before you start</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#a69898] text-xs md:text-base">11m 40s</p>
                                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" color="#a69898" />
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between border border-solid border-[#e5e5e5] bg-white hover:bg-[#fbfbfb] cursor-pointer py-1 px-3 md:py-3 md:px-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <FaRegCircle color="#a69898" />
                                <Image
                                    src="/assets/video.png"
                                    alt="Vercel logomark"
                                    width={727}
                                    height={404}
                                    className="w-14 md:w-20 h-auto rounded-sm md:rounded-lg"
                                />
                                <p className="font-medium text-xs">To watch before you start</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#a69898] text-xs md:text-base">11m 40s</p>
                                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" color="#a69898" />
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between border border-solid border-[#e5e5e5] bg-white hover:bg-[#fbfbfb] cursor-pointer py-1 px-3 md:py-3 md:px-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <FaRegCircle color="#a69898" />
                                <Image
                                    src="/assets/video.png"
                                    alt="Vercel logomark"
                                    width={727}
                                    height={404}
                                    className="w-14 md:w-20 h-auto rounded-sm md:rounded-lg"
                                />
                                <p className="font-medium text-xs">To watch before you start</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#a69898] text-xs md:text-base">11m 40s</p>
                                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" color="#a69898" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2 mb-7">
                        <p className="font-medium">II. Lorem Ipsum</p>
                        <div className="flex items-center w-full justify-between border border-solid border-[#e5e5e5] bg-white hover:bg-[#fbfbfb] cursor-pointer py-1 px-3 md:py-3 md:px-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <FaRegCircle color="#a69898" />
                                <Image
                                    src="/assets/video.png"
                                    alt="Vercel logomark"
                                    width={727}
                                    height={404}
                                    className="w-14 md:w-20 h-auto rounded-sm md:rounded-lg"
                                />
                                <p className="font-medium text-xs">To watch before you start</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#a69898] text-xs md:text-base">11m 40s</p>
                                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" color="#a69898" />
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between border border-solid border-[#e5e5e5] bg-white hover:bg-[#fbfbfb] cursor-pointer py-1 px-3 md:py-3 md:px-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <FaRegCircle color="#a69898" />
                                <Image
                                    src="/assets/video.png"
                                    alt="Vercel logomark"
                                    width={727}
                                    height={404}
                                    className="w-14 md:w-20 h-auto rounded-sm md:rounded-lg"
                                />
                                <p className="font-medium text-xs">To watch before you start</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#a69898] text-xs md:text-base">11m 40s</p>
                                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" color="#a69898" />
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between border border-solid border-[#e5e5e5] bg-white hover:bg-[#fbfbfb] cursor-pointer py-1 px-3 md:py-3 md:px-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <FaRegCircle color="#a69898" />
                                <Image
                                    src="/assets/video.png"
                                    alt="Vercel logomark"
                                    width={727}
                                    height={404}
                                    className="w-14 md:w-20 h-auto rounded-sm md:rounded-lg"
                                />
                                <p className="font-medium text-xs">To watch before you start</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#a69898] text-xs md:text-base">11m 40s</p>
                                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" color="#a69898" />
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between border border-solid border-[#e5e5e5] bg-white hover:bg-[#fbfbfb] cursor-pointer py-1 px-3 md:py-3 md:px-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <FaRegCircle color="#a69898" />
                                <Image
                                    src="/assets/video.png"
                                    alt="Vercel logomark"
                                    width={727}
                                    height={404}
                                    className="w-14 md:w-20 h-auto rounded-sm md:rounded-lg"
                                />
                                <p className="font-medium text-xs">To watch before you start</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#a69898] text-xs md:text-base">11m 40s</p>
                                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" color="#a69898" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
