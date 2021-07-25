import React from 'react';
import Image from "next/image";
import boost from "../public/images/bg-boost-desktop.svg"
import Button from "@material-tailwind/react/Button";

const BostLinks = () => {
    return (
        <div className={"bg-violet-dark w-full h-60 text-center flex flex-col justify-center items-center relative"}>
            <Image src={boost} layout={"fill"} objectFit={"cover"} className={"z-10"}/>
            <h1 className={"text-3xl font-bold text-white z-2"}>Bost your links today</h1>
            <Button
                color={"cyan"}
                buttonType="filled"
                size="regular"
                rounded={true}
                block={false}
                iconOnly={false}
                ripple="dark"
                className={"h-12 text-base w-38 m-4 z-10"}
            >
                Get Started
            </Button>

        </div>
    );
};

export default BostLinks;
