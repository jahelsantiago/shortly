import {React, useState, useEffect} from 'react';
import AddLinks from "./AddLinks";
import ShortLinks from "./LinkComponent";
import LoadingLink from "./LoadingLink";


const ShortenLinks = () => {
    const [linksList, setLinksList] = useState([]);
    const [fetchState, setFetchState] = useState({loading : false, message : ""});

    useEffect(() => {
        return () => {
            console.log(fetchState)
        };
    }, [fetchState]);


    return (
        <div className={"main-container space-y-6"}>
            <AddLinks linksList = {linksList} setLinksList = {setLinksList} setFetchState = {setFetchState} fetchState = {fetchState}/>
            {fetchState.loading && <LoadingLink/>}
            {linksList.map((link, index)=>(
                <ShortLinks originalLink={link.originaLink} shortenLink={link.shortenLink} fullShortenLink={link.full_short_link} key = {index}/>
            ))}
        </div>
    );
};

export default ShortenLinks;
