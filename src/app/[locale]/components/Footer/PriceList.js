import Image from "next/image";
import ButtonUI from "/src/app/[locale]/components/UI/ButtonUI/ButtonUI.jsx";

const PriceList = ({ title, buttonLabel, messengersLabel }) => (
    <div className="footer-section price-list">
        <h3>{title}</h3>
        <ButtonUI label={buttonLabel} icon="download" size="md" />
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
