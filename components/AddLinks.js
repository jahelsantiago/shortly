import {React, useState} from 'react';
import backgroundMobile from "../public/images/bg-shorten-mobile.svg"
import backgroundDesktop from "../public/images/bg-shorten-desktop.svg"
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import boost from "../public/images/bg-boost-desktop.svg";

async function createLink(link){
    const shortenLink = {error : false, error_code : 0, originaLink : link, shortenLink : "temp"}

    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    let result = await response.json()
    console.log(result)
    if(result.ok){
        shortenLink.shortenLink = result.result.short_link
        shortenLink.full_short_link = result.result.full_short_link
    }else{
        shortenLink.error = true
        shortenLink.error_code = result.error_code
    }
    return shortenLink
}

function AddLinks({linksList, setLinksList}) {
    const [linkInput, setLinkInput] = useState("");
    const [linkError, setLinkError] = useState(false);



    const handleInputChange = (e)=>{
        setLinkInput(e.target.value)
        setLinkError(false)
    }

    const handleSubmit = async () => {
        if(linkInput.length === 0){
            setLinkError(true)
            return
        }
        setLinksList([await createLink(linkInput), ...linksList])
    }
    return (
        <div className={"flex flex-col  space-y-4 md:space-x-4 md:space-y-0 md:flex-row bg-violet-dark relative top-[-85px] mb-[-50px] p-12"} style={{backgroundImage: `url(${backgroundMobile})`}}>
            <Image src={backgroundDesktop} layout={"fill"} objectFit={"cover"} className={"z-10"}/>
            <input placeholder={"Shorten a link here"}
                   className={"h-12 flex-grow rounded-lg outline-none text-lg z-20"}
                   value={linkInput}
                   onChange={handleInputChange}
            />
            {linkError && <span className={"text-red-600 italic my-0 z-20"}>Please add a link</span>}
            <Button
                color="cyan"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className={"h-12 text-base md:w-48 z-20"}
                onClick={handleSubmit}
            >
                Shorten it!
            </Button>

        </div>
    );
}

export default AddLinks;