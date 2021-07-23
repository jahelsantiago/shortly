import React, {useState} from 'react';
import Image from "next/image"
import logo from "../public/images/logo.svg"
import Icon from "@material-tailwind/react/Icon";
import 'tailwindcss/tailwind.css'
import Button from "@material-tailwind/react/Button";

function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () =>{
        console.log("hola")
        alert("Hola")
    }
    return (
        <div className={"flex justify-between items-center"}>
            <Image src={logo}/>
            <IconButton onClick = {handleMenuOpen} className={"md:hidden"}>
                <Icon name="menu" size="3xl" className = "text-red-800"/>
            </IconButton>
            <MenuFull/>


        </div>
    );
}

function MenuFull(){
    return(<div className={"hidden md:flex justify-between items-center flex-grow ml-7  sticky"}>
        <div className={"space-x-4 flex "}>
            <SmallButton>
                <a className={"menu-text"}>Feature</a>
            </SmallButton>
            <SmallButton>
                <a className={"menu-text"}>Prices</a>
            </SmallButton>
            <SmallButton>
                <a className={"menu-text"}>Resources</a>
            </SmallButton>
        </div>
        <div className={"flex items-center space-x-4"}>
            <SmallButton>
                <a className={"menu-text"}>Login</a>
            </SmallButton>
            <Button
                color="cyan"
                buttonType="filled"
                size="regular"
                rounded={true}
                block={false}
                iconOnly={false}
                ripple="light"
                className={"py-auto capitalize"}
            >
                Sign Up
            </Button>

        </div>
    </div>)
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

function SmallButton({children}) {
    return (
        <Button
            color="gray"
            buttonType="link"
            size="sm"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="dark"
            className={"text-sm capitalize "}
        >
            {children}
        </Button>
    )
}

const IconButton = ({children, onClick, className}) => {
    return (
        <Button
            color="blueGray"
            buttonType="link"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={true}
            ripple="dark"
            onClick = {onClick}
            className = {className}
        >
            {children}
        </Button>
    );
};

export default NavBar;
