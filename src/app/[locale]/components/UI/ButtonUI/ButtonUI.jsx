// @param {Object} children - Dom elements
// @param {string} type - Values: button, submit, reset
// @param {string} size - Values: xs, md, lg
// @param {string} theme - Values: default, accent, highlight
// @param {string} label
// @param {string} icon
// @param {boolean} disabled
// @param {function} onClick
// @returns

import { useRef } from "react";
import Icons from "../Icons/Icons";
import "./ButtonUI.scss";

const ButtonUI = ({
    children,
    type = "button",
    label = "",
    icon = "",
    size = "md",
    theme = "default",
    disabled = false,
    onClick,
}) => {
    const buttonRef = useRef(null);

    return (
        <button
            ref={buttonRef}
            className={`ui-button ui-button--${size} ui-button--${theme}`}
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
