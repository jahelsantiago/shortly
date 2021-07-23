import React from 'react';
import Image from "next/image"
import Working from "../public/images/illustration-working.svg"
import backgroundMobile from "../public/images/bg-shorten-mobile.svg"
import Button from "@material-tailwind/react/Button";
const Introduction = () => {
    return (
        <div className={"flex flex-col items-center md:flex-row mb-[150px]"}>
            <div className={"md:order-2"}>
                <Image src={Working} />
            </div>

            <div className={"flex flex-col justify-center items-center order-1 text-center md:text-left md:items-start"}>
                <h1 className={"font-bold text-4xl text-gray-700 mt-12 md:text-6xl"}>
                    More than just shorten links
                </h1>
                <h2 className={"text-gray-500  font-semibold text-xl mt-4 w-full"}>
                    Build your brand recognition and get detailed <br/> insights on how your links are performing.
                </h2>
                <Button
                    color="cyan"
                    buttonType="filled"
                    size="regular"
                    rounded={true}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    className={"mt-4 text-xl"}
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default Introduction;
