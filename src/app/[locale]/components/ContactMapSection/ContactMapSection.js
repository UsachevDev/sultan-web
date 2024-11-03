import Image from "next/image";
import "./ContactMapSection.css";

const ContactMapSection = () => {
    return (
        <section className="contact-map-section">
            <Image
                className="map-image"
                src="/image/map-image.jpg"
                alt="Map"
                layout="fill"
                objectFit="cover"
            />
            <div className="contact-info">
                <h2>Контакты</h2>
                <p>Оптовый поставщик «Султан»</p>

                <div className="contact-info-container">
                    <div className="contact-info-address">
                        <h3>Адрес:</h3>
                        <p className="address">
                            г. Кокшетау, ул. Ук Ташенова 1296 (Рынок Восточный)
                        </p>
                    </div>

                    <div className="sales-department">
                        <h3>Отдел продаж:</h3>
                        <a className="phone-number" href={`tel:+7 (777) 490-00-91`}>
                            +7 (777) 490-00-91
                        </a>
                        <p>
                            <a href={`mailto:opt.sultan@mail.ru`}>opt.sultan@mail.ru</a>
                        </p>
                    </div>

                    <div className="tax-info">
                        <h3>Данные налогоплательщика:</h3>
                        <div className="tax-info-content">
                            <p>ИП Катран Д.С.</p>
                            <p>ИИН: 860113450858</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMapSection;
