import {React, useState} from 'react';
import AddLinks from "./AddLinks";
import ShortLinks from "./LinkComponent";

const demo = [
    {originaLink: "originlLink", shortenLink: "temporal"},
    {originaLink: "originlLink", shortenLink: "temporal"}
]

const ShortenLinks = () => {
    const [linksList, setLinksList] = useState(demo);
    return (
        <div className={"main-container space-y-6"}>
            <AddLinks linksList = {linksList} setLinksList = {setLinksList}/>
            {linksList.map((link, index)=>(
                <ShortLinks originalLink={link.originaLink} shortenLink={link.shortenLink} fullShortenLink={link.full_short_link} key = {index}/>
            ))}
        </div>
    );
};

export default ShortenLinks;
