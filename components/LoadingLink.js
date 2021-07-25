import React from 'react';

const LoadingLink = () => {
    return (
        <div className={"bg-white rounded-lg w-full h-[210px] md:h-[80px] py-5"}>
            <div className={"animate-spin border-blue-500 border-b-0 rounded-full w-10 h-10 border-4 mx-auto"}/>
        </div>
    );
};

export default LoadingLink;
