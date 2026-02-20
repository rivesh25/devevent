"use client";
import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
    const handleClick = () => {
        posthog.capture("explore_events_clicked");
    };

    return (
        <a href="#events" id="explore-btn" className="mt-7 mx-auto" onClick={handleClick}>
            <span>
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="Arrow down" width={24} height={24} />
            </span>
        </a>
    )
}

export default ExploreBtn
