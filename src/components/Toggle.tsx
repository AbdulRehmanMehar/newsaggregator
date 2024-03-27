import { ReactNode, useState } from "react"
import { Animate } from "react-animate-mount";


type ToggleProps = {
    label: string;
    children: ReactNode;
}

export default function Toggle({label, children}: ToggleProps) {
    const [isVisible, setVisiblity] = useState(false);
    
    return (
        <>
            <a className="cursor-pointer text-blue-700" onClick={() => setVisiblity(visibility => !visibility)}> {isVisible ? 'Hide' : 'Show'} {label}</a>
            <Animate show={isVisible}>{children}</Animate>
        </>
    )
}