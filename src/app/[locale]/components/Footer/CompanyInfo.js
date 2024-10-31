import Image from "next/image";

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
            className="company-logo"
            width={156}
            height={66}
        />
        <p className="company-info-description">{description}</p>
        <form action="#" method="post" className="subscribe-form">
            <label className="subscribe-form-label" htmlFor="email">
                {subscribeLabel}
            </label>
            <div className="email-input">
                <input
                    type="email"
                    id="email"
                    placeholder={subscribePlaceholder}
                    required
                />
                <button type="submit" className="subscribe-button">
                    <svg
                        width="8"
                        height="15"
                        viewBox="0 0 8 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 12.8571L5 7.5L0 2.14286L1 0L8 7.5L1 15L0 12.8571Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </form>
    </div>
);

export default CompanyInfo;
