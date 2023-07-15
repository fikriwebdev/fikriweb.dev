"use client";

import Separator from "@/components/Separator";

interface TimelineProps {
    years: string | number;
    title: string;
    description: string;
}

const Timeline = ({ years, title, description }: TimelineProps) => {
    return (
        <div className="flex gap-4 md:gap-0">
            <div className="flex flex-col items-center w-[100px] relative">
                <p className="w-20 text-center border border-gray-200 bg-gray-100 dark:border-gray-700 rounded-md dark:bg-gray-800 px-2 py-1 mb-2 text-sm md:text-base">
                    {years}
                </p>
                {years !== "Current" ? (
                    <Separator
                        orientation="vertical"
                        className="data-[orientation=vertical]:w-1 rounded-full m-0 bg-gray-300 dark:bg-gray-700"
                    />
                ) : null}
                <div className="w-full absolute bottom-0 left-0 right-0 h-12"></div>
            </div>
            <div>
                <div className="w-full md:w-[500px] h-full border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 rounded-md p-4">
                    <h1 className="font-medium mb-2 text-base md:text-lg">
                        {title}
                    </h1>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Timelines() {
    const timelines = [
        {
            years: "2021",
            title: "Internship at PT Rakyat Tamansari",
            description:
                "During my internship at PT Rakyat Tamansari, I developed a forum that allowed visitors to file complaints and report issues. Thanks to this system, we were able to quickly and effectively resolve problems and improve the overall visitor experience.",
        },
        {
            years: "2022",
            title: "Graduation and Academic Achievements",
            description:
                "In 2022, I graduated from my college with a GPA of 3.79 / 4.00, which reflects my dedication to my studies and my strong work ethic.",
        },
        {
            years: "Current",
            title: "Full-time work at Travel Startup in Bahrain",
            description:
                "After graduation, I began working for a travel startup in Bahrain. My boss was impressed by my performance, and I was quickly offered a full-time position. Since then, I have continued to excel in my role, contributing to the development of innovative front-end solutions and helping to build a dynamic and successful company.",
        },
    ];

    return (
        <section className="mt-8 flex flex-col justify-center">
            <h1 className="gradient-text">My Journey</h1>
            <div className=" text-gray-600 dark:text-gray-300 flex justify-center">
                <div className="flex flex-col mt-8 gap-4">
                    {timelines.map(tl => (
                        <Timeline
                            key={tl.years}
                            years={tl.years}
                            title={tl.title}
                            description={tl.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
