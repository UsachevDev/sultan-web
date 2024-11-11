import Image from "next/image";

const PriceList = ({
    title,
    buttonLabel,
    messengersLabel,
}) => (
    <div className="footer-section price-list">
        <h3>{title}</h3>
        <a href="#" className="price-list-button">
            {buttonLabel}
            <span className="price-list-button-icon">
                <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.9583 4.375H8.12492V0.125H3.87492V4.375H1.04159L5.99992 10.0417L10.9583 4.375ZM0.333252 11.4583H11.6666V12.875H0.333252V11.4583Z"
                        fill="white"
                    />
                </svg>
            </span>
        </a>
        <p className="messengers-label">{messengersLabel}</p>
        <div className="messengers">
            <a target="_blank" href="https://www.whatsapp.com/">
                <Image
                    src="/image/whatsapp-icon.png"
                    alt="WhatsApp"
                    width={39}
                    height={39}
                />
            </a>
            <a target="_blank" href="https://telegram.org/">
                <Image
                    src="/image/telegram-icon.png"
                    alt="Telegram"
                    width={39}
                    height={39}
                />
            </a>
        </div>
    </div>
);

export default PriceList;
