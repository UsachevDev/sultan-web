import { useState } from "react";
import "./Accordion.scss";

const Accordion = ({ title, children, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={`accordion ${className}`}>
            <h2
                className={`accordion__title ${isOpen ? "open" : ""}`}
                onClick={toggleAccordion}
            >
                {title}
            </h2>
            {isOpen && <div className="accordion__content">{children}</div>}
        </section>
    );
};

export default Accordion;
