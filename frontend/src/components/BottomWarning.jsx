import { Link } from "react-router-dom";

export function BottomWarning({label, buttonText,to}){
    return(
        <div>
            <div className="flex justify-center font-bold px-2 text-sm">
                {label}
            </div>
            <Link className="cursor-pointer font-bold underline pl-1" to={to}>
                {buttonText}
            </Link>
        </div>
    )
}