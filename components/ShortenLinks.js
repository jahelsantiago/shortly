import {React, useState, useEffect} from 'react';
import AddLinks from "./AddLinks";
import LinkComponent from "./LinkComponent";
import LoadingLink from "./LoadingLink";


const ShortenLinks = () => {
    const [linksList, setLinksList] = useState([]);
    const [fetchState, setFetchState] = useState({loading : false, error: false, message : ""});

    return (
        <div className={"main-container space-y-6"}>

            <AddLinks linksList = {linksList} setLinksList = {setLinksList} setFetchState = {setFetchState} fetchState = {fetchState}/>
            {fetchState.loading && <LoadingLink/>}
            {fetchState.error && <ErrorComponent fetchState={fetchState} setFetchState = {setFetchState}/>}
            {linksList.map((link, index)=>(
                <LinkComponent originalLink={link.originaLink} shortenLink={link.shortenLink} fullShortenLink={link.full_short_link} key = {index}/>
            ))}
        </div>
    );
};

export default ShortenLinks;


function ErrorComponent({fetchState, setFetchState}){
    useEffect(() => {
        let timmer = setTimeout(()=>{setFetchState({...fetchState, error: false})}, 4000)
        return () => {
            clearTimeout(timmer)
        };
    }, []);


    return(
        <div className={"bg-white rounded-lg w-full h-[210px] md:h-[80px] py-5 flex justify-center items-center"}>
            <p className={"text-xl font-bold text-red-600"}>
                {fetchState.message}
            </p>
        </div>
    )
}
