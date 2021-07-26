import React, {useState, useEffect, useRef} from 'react';
import Image from "next/image"
import logo from "../public/images/logo.svg"
import Icon from "@material-tailwind/react/Icon";
import 'tailwindcss/tailwind.css'
import Button from "@material-tailwind/react/Button";

function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () =>{
        setMenuOpen(prev => !prev)
    }
    return (
        <div className={"fixed top-0 inset-x-0 main-container z-50"}>
            <div className={"flex justify-between my-8"}>
                <Image src={logo}/>
                <IconButton onClick = {handleMenuOpen} className={"md:hidden"}>
                    <Icon name="menu" size="3xl" className = "text-red-800"/>
                </IconButton>
                <MenuFull/>
            </div>
            {menuOpen && <MenuSmall setOpen={setMenuOpen}/>}
        </div>


    );
}

function MenuFull(){
    return(
        <div className={"hidden md:flex justify-between items-center flex-grow ml-7"}>
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
            <SignupButton/>
        </div>
    </div>)
}

function MenuSmall({setOpen}){
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setOpen);

    return(
        <div ref={wrapperRef} className={"main-container bg-violet-dark  flex flex-col items-center rounded-lg md:hidden p-8"}>
            <a className={"menu-item"}>Feature</a>
            <a className={"menu-item"}>Prices</a>
            <a className={"menu-item"}>Resource</a>
            <span className={"h-px w-10/12 bg-gray-500 my-4 "}/>
            <a className={"menu-item"}>Login</a>
            <SignupButton/>
        </div>
    )
}

function SignupButton() {
    return(
        <Button
            color="cyan"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="light"
            className={"py-auto capitalize w-full text-lg md:text-sm"}
        >
            Sign Up
        </Button>
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

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setOpen) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default NavBar;
