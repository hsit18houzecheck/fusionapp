import React from "react";
import { X, MapPin } from "lucide-react";
import { AiOutlineHome } from "react-icons/ai";

import { replacePlaceholders } from "@/lib/utils";

type JobData = {
    booking_date: string;
    job_type: string;
};

type MarkerPopupContentProps = {
    postalCode: string;
    city: string;
    jobData: JobData[];
    onClose?: () => void;
    content: {
        surveyCompleted: string;
        recentJob: string;
        disclaimer: string;
    };
};

export default function MarkerPopupContent({
    postalCode,
    city,
    jobData,
    onClose,
    content,
}: MarkerPopupContentProps) {
    // Parse dates and sort to find the latest job
    const latestJob = React.useMemo(() => {
        if (jobData.length === 0) return null;

        const sortedJobs = [...jobData].sort((a, b) => {
            const parseDate = (dateStr: string) => {
                const [day, month, year] = dateStr.split("/");
                return new Date(`${year}-${month}-${day}`).getTime();
            };
            return parseDate(b.booking_date) - parseDate(a.booking_date);
        });

        return sortedJobs[0];
    }, [jobData]);

    return (
        <div className="z-999 bg-yellow-100 rounded-lg p-6 flex flex-col gap-2.5 backdrop-blur-md w-78 md:w-95">
            {/* Close button */}
            <div className="flex justify-end -mt-1 -mr-1">
                <button
                    onClick={onClose}
                    className="w-5 h-5 flex items-center justify-center text-yellow-700 hover:text-yellow-900 transition-colors cursor-pointer"
                    aria-label="Close"
                >
                    <X className="w-5 h-5 text-yellow-500" strokeWidth={2.5} />
                </button>
            </div>

            {/* Main content */}
            <div className="flex flex-col">
                {/* Postcode and City */}
                <div className="flex flex-col gap-[0.9375rem]">
                    <div className="flex flex-col gap-[0.9375rem]">
                        {/* Postcode heading */}
                        <h3 className="font-freight font-medium text-yellow-900 text-[1.5rem] md:text-[2rem] leading-5 md:leading-9 m-0 lining-nums proportional-nums">
                            {(postalCode || "").slice(0, -3)}
                        </h3>

                        {city && (
                            <div className="flex items-center gap-2.5">
                                <p className="font-opensauce font-medium text-yellow-900 text-base md:text-[1.125rem] leading-7 m-0">
                                    {city}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Divider line */}
                    <div className="w-full h-px bg-yellow-700 mb-5" />
                </div>

                {/* Survey count and latest job */}
                <div className="flex flex-col gap-5">
                    {/* Survey count */}
                    <p className="font-opensauce font-medium text-yellow-900 text-xs leading-5 m-0">
                        <strong className="font-semibold">
                            {replacePlaceholders(content.surveyCompleted, {
                                count: jobData.length,
                                plural: jobData.length !== 1 ? "s" : ""
                            })}
                        </strong>
                    </p>

                    {/* Latest job card */}
                    {latestJob && (
                        <div className="flex flex-col gap-5">
                            {/* Latest Job heading */}
                            <p className="font-opensauce font-medium text-yellow-900 text-base md:text-lg leading-6 md:leading-5 m-0">
                                {content.recentJob}
                            </p>

                            <div className="flex gap-2.5 items-start">
                                <div className="flex gap-2.5 text-yellow-500 p-1.5 rounded-sm bg-yellow-900 shadow-[0_82px_60px_0_rgba(128,93,5,0.09),0_24.721px_18.088px_0_rgba(128,93,5,0.06),0_10.268px_7.513px_0_rgba(128,93,5,0.05),0_3.714px_2.717px_0_rgba(128,93,5,0.03)]">
                                    <AiOutlineHome className=" w-4 h-4" />
                                </div>
                                {/* Job details */}
                                <div className="flex flex-col items-start text-grey-500">
                                    <p className="font-opensauce font-medium  text-[0.75rem] leading-5 m-0">
                                        {latestJob.job_type}
                                    </p>
                                    {/* <p className="font-opensauce font-medium text-grey-500 text-[0.75rem] leading-5 m-0">
                                        {latestJob.booking_date}
                                    </p> */}
                                </div>
                            </div>
                            <p className="font-opensauce italic text-yellow-900 text-[0.625rem] leading-4 m-0 opacity-80">
                                {content.disclaimer}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
