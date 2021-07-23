import Head from 'next/head'
import NavBar from "../components/NavBar";
import Introduction from "../components/Introduction";
import AddLinks from "../components/AddLinks";
import ShortenLinks from "../components/ShortenLinks";

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

      <body>
        <div className={"pt-4 main-container px-8"}>
            <NavBar/>
            <Introduction/>
        </div>
        <div className={"bg-gray-200 px-8"}>
            <ShortenLinks/>
        </div>

      </body>
    </div>
  )
}
