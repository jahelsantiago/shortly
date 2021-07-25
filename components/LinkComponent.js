import {React, useState} from 'react';
import Button from "@material-tailwind/react/Button";

const LinkComponent = ({originalLink, shortenLink, fullShortenLink}) => {
    //copy the text to the clip board and then change its state again
    const handleCopy = () => {
        navigator.clipboard.writeText(shortenLink)
        setCopyButton({color:"deepPurple", text: "Copied!"})
        setTimeout(()=>{
            setCopyButton({color : "cyan", text : "Copy"})
        }, 4000)
    }
    const [copyButton, setCopyButton] = useState({color : "cyan", text : "Copy"});


    return (
        <div className={"bg-white flex flex-col  rounded-lg items-center px-4 md:flex-row"}>
            <div className={"flex justify-between flex-col md:flex-row md:flex-grow w-full"}>
                <a className={"text-lg text-gray-700 font-bold my-4 cursor-pointer"} href={originalLink} target={"_blank"}>
                    {originalLink}
                </a>
                <hr className={"text-gray-400 md:hidden w-full"}/>
                <a className={"text-lg text-cyan-600 font-bold my-4 cursor-pointer"} href={fullShortenLink} target={"_blank"}>
                    {shortenLink}
                </a>
            </div>
            <Button
                color={copyButton.color}
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className={"w-full h-12 text-base md:w-32 m-4"}
                onClick={handleCopy}
            >
                {copyButton.text}
            </Button>
        </div>
    );
};

export default LinkComponent;
