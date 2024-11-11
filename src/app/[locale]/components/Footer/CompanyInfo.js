import Image from "next/image";
import ButtonUI from "UI/ButtonUI/ButtonUI.jsx";

const CompanyInfo = ({
    logo,
    logoAlt,
    description,
    subscribeLabel,
    subscribePlaceholder,
}) => (
    <div className="footer-section company-info">
        <Image
            src={logo}
            alt={logoAlt}
            className="company-info-logo"
            width={156}
            height={66}
        />
        <p className="company-info-description">{description}</p>
        <form action="#" method="post" className="company-info-subscribe-form">
            <label className="company-info-subscribe-form-label" htmlFor="email">
                {subscribeLabel}
            </label>
            <div className="email-input">
                <input
                    type="email"
                    id="email"
                    placeholder={subscribePlaceholder}
                    required
                />
                <ButtonUI icon="pointer" size="xs" />
            </div>
        </form>
    </div>
);

export default CompanyInfo;
