import { useRef } from "react";
import Icons from "../Icons/Icons";
import "./ButtonUI.scss";

const ButtonUI = ({
    children,
    className,
    type = "button",
    label = "",
    icon = "",
    size = "md",
    disabled = false,
    onClick,
}) => {
    return (
        <button
            className={`ui-button ui-button--${size} ${className}`}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {
                <>
                    {children || (!!icon && <Icons name={icon} />)}
                    {!!label && (
                        <span className="ui-button_label">{label}</span>
                    )}
                </>
            }
        </button>
    );
};

export default ButtonUI;
