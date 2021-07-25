import React from 'react';
import Image from "next/image";
import brand from "../public/images/icon-brand-recognition.svg"
import records from "../public/images/icon-detailed-records.svg"
import custom from "../public/images/icon-fully-customizable.svg"

const BrandRecognition = () => {
    return (
        <div className={"flex flex-col md:flex-row gap-16 md:gap-8 justify-between items-center relative main-container"}>
            <div className={"h-full w-4 md:w-full md:h-4 bg-cyan-500 absolute z-0"}/>


            <BrandStat
                title={"Brand recognition"}
                content={"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."}
                icon={brand}
            />
            <BrandStat
                title={"Detailed Records"}
                content={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}
                icon={records}
                className = {"top-14"}
            />
            <BrandStat
                title={"Fully customisable"}
                content={"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."}
                icon={custom}
                className = {"top-28"}
            />
        </div>

    );
};

export default BrandRecognition;



const BrandStat = ({title, content, icon, className})=>{
    return(
        <div className={"max-w-xs bg-white rounded-lg px-7 pb-7 text-center md:text-left z-10 relative"+" "+className}>
            <div className={"relative mx-auto top-[-40px] rounded-full bg-purple-900 w-20 h-20 flex justify-center items-center"}>
                <Image src={icon}/>
            </div>
            <h3 className={"text-gray-700 font-bold text-2xl mb-8"}>
                {title}
            </h3>
            <p className={"text-gray-500 font-semibold text-lg"}>
                {content}
            </p>
        </div>
    )
}