import React, {useState} from 'react';
import Image from "next/image"
import logo from "../public/images/logo.svg"
import Icon from "@material-tailwind/react/Icon";
import IconButton from "../components/IconButton";


function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () =>{
        console.log("hola")
        alert("Hola")
    }
    return (
        <div className={"flex justify-between items-center"}>
            <Image src={logo}/>
            <IconButton onClick = {handleMenuOpen}>
                <Icon name="menu" size="3xl" className = "text-red-800"/>
            </IconButton>

        </div>
    );
}

function Menu(){

    return(
        <div className={"w-full bg-red-900 absolute top-0 flex flex-col items-center rounded-lg"}>
            <a>Feature</a>
            <a>Prices</a>
            <a>Resource</a>
        </div>
    )
}

export default NavBar;
