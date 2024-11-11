import Image from "next/image";

const Contacts = ({
    title,
    phone,
    email,
    workTime,
    orderCallRefLable,
    orderCallRefHref,
    contactsEmailContainerSpan,
}) => (
    <div className="footer-section contacts">
        <h3>{title}</h3>
        <div className="contacts-phone-container">
            <a className="phone-number" href={`tel:${phone}`}>
                {phone}
            </a>
            <p className="work-time">{workTime}</p>
            <a className="order-call-ref" href={orderCallRefHref}>
                {orderCallRefLable}
            </a>
        </div>

        <div className="contacts-email-container">
            <p>
                <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p className="contacts-email-container-span">
                {contactsEmailContainerSpan}
            </p>
        </div>
        <div className="contacts-payment-methods">
            <Image
                src="/image/visa-icon.png"
                alt="Visa"
                width={50}
                height={30}
            />
            <Image
                src="/image/mastercard-icon.png"
                alt="Mastercard"
                width={50}
                height={30}
            />
        </div>
    </div>
);

export default Contacts;
