import {React, useState} from 'react';
import backgroundMobile from "../public/images/bg-shorten-mobile.svg"
import backgroundDesktop from "../public/images/bg-shorten-desktop.svg"
import Button from "@material-tailwind/react/Button";
import Image from "next/image";


async function createLink(link){
    const shortenLink = {hasError : false, error_code : 0, originaLink : link, shortenLink : "temp"}

    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    let result = await response.json()
    console.log(result)
    if(result.ok){
        shortenLink.shortenLink = result.result.short_link
        shortenLink.full_short_link = result.result.full_short_link
    }else{
        shortenLink.hasError = true
        shortenLink.error_code = result.error_code
    }
    return shortenLink
}

const handleError = (newLinkInput) => {
    let message = ""
    switch (newLinkInput.error_code){
        case 2:
            message = "This is not a valid URL."
            break
        case 3:
            message = "Rate limit reached. Wait a second and try again"
            break
        case 5:
            message = "shortcode code (slug) already taken/in use"
            break
        case 6:
            message = "Unknown error"
            break
        case 8:
            message = "Invalid code submitted (code not found/there is no such short-link)"
            break
        case 10:
            message =  "Trying to shorten a disallowed Link."
    }
    return message
}

function AddLinks({linksList, setLinksList, setFetchState, fetchState}) {
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
        await setFetchState({...fetchState, loading : true })
        setLinkInput("")
        let newLinkInput = await createLink(linkInput)
        if(newLinkInput.hasError){
            const errorMessage = handleError(newLinkInput)
            console.log(errorMessage)
            await setFetchState({message: errorMessage, loading : false, error : true })
        }else{
            setLinksList([newLinkInput, ...linksList])
            await setFetchState({...fetchState, loading : false, error : false})
        }

    }
    return (
        <div className={"flex flex-col  space-y-4 md:space-x-4 md:space-y-0 md:flex-row bg-violet-dark relative top-[-85px] mb-[-50px] p-12"} style={{backgroundImage: `url(${backgroundMobile})`}}>
            <Image src={backgroundDesktop} layout={"fill"} objectFit={"cover"} className={"z-10"}/>
            <div className={"flex-grow z-20"}>
                <input placeholder={"Shorten a link here"}
                       className={"h-12 w-full rounded-lg outline-none text-lg z-20 pl-4 text-gray-700"}
                       value={linkInput}
                       onChange={handleInputChange}
                />
                {linkError && <span className={"text-red-600 italic z-20"}>{"Empty Link"}</span>}
            </div>
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