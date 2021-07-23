import {React, useState} from 'react';
import backgroundMobile from "../public/images/bg-shorten-mobile.svg"
import backgroundDesktop from "../public/images/bg-shorten-desktop.svg"
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";

function AddLinks({linksList, setLinksList}) {
    const [linkInput, setLinkInput] = useState("");
    const [linkError, setLinkError] = useState(false);

    const createLink = (originlLink) => {
        return {originaLink: originlLink, shortenLink: "temporal"}
    }
    const handleInputChange = (e)=>{
        setLinkInput(e.target.value)
        setLinkError(false)
    }
    const handleSubmit = () => {
        if(linkInput.length === 0){
            setLinkError(true)
            return
        }
        setLinksList([createLink(linkInput), ...linksList])



    }
    return (
        <div className={"flex flex-col  space-y-4 md:space-x-4 md:space-y-0 md:flex-row bg-purple-900 relative top-[-85px] mb-[-50px] p-12"} style={{backgroundImage: `url(${backgroundMobile})`}}>
            <input placeholder={"Shorten a link here"}
                   className={"h-12 flex-grow rounded-lg outline-none text-lg "}
                   value={linkInput}
                   onChange={handleInputChange}
            />
            {linkError && <span className={"text-red-600 italic my-0"}>Please add a link</span>}
            <Button
                color="cyan"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className={"h-12 text-lg md:w-48"}
                onClick={handleSubmit}
            >
                Shorten it!
            </Button>

        </div>
    );
}

export default AddLinks;