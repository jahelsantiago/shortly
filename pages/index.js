import Head from 'next/head'
import NavBar from "../components/NavBar";
import Introduction from "../components/Introduction";
import AddLinks from "../components/AddLinks";
import ShortenLinks from "../components/ShortenLinks";
import BrandRecognition from "../components/BrandRecognition";
import AdvancedStatics from "../components/AdvancedStatics";
import BostLinks from "../components/BostLinks";
import Footer from "../components/Footer";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shortly</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>


        <div className={"pt-4 main-container md:px-8"}>
            <NavBar/>
            <Introduction/>
        </div>

        <div className={"bg-gray-200 md:px-8 pb-64"}>
            <ShortenLinks/>
            <AdvancedStatics/>
            <BrandRecognition/>
        </div>
        <BostLinks/>
        <div className={"bg-black w-full"}>
            <Footer/>
        </div>


    </div>
  )
}
