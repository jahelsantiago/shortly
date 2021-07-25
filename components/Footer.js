import React from 'react';
import Image from "next/image";
import logo from "../public/images/logo.svg"
import instagram from "../public/images/icon-instagram.svg"
import pinterest from "../public/images/icon-pinterest.svg"
import fabebook from "../public/images/icon-facebook.svg"
import twitter from "../public/images/icon-twitter.svg"


const servicesItems = [
    {title : "Features", values : ["Link Shortening", "Branded" ,"Links" ,"Analytics"]},
    {title : "Resources ", values : ["Blog", "Developers", "Support",]},
    {title : "Company  ", values : ["About", "Our Team", "Careers", "Contact",]}
]

const Footer = () => {
    return (
        <div className={"main-container flex items-center md:items-start justify-between flex-col md:flex-row gap-12 py-16"}>

            <div className={"max-w-md text-white"}>
                <Image src={logo}/>
            </div>

            <div className={"text-center md:text-left gap-8 md:gap-16 flex flex-col md:flex-row"}>
                {servicesItems.map((item , index)=>(
                    <div key={index}>
                        <h2 className={"text-white font-bold mb-4 "}>{item.title}</h2>
                        {item.values.map((item, idx)=>(
                            <p className={"text-gray-300 hover:text-blue-300 cursor-pointer font-semibold my-1"} key={idx}><a>{item}</a></p>
                        ))}
                    </div>
                ))}
            </div>
            <div className={"flex gap-4"}>
                <Image src={fabebook}/>
                <Image src={twitter}/>
                <Image src={pinterest}/>
                <Image src={instagram}/>
            </div>
        </div>
    );
};

export default Footer;

