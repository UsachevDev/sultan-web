"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import CompanyInfo from "./CompanyInfo";
import SiteMenu from "./SiteMenu";
import Categories from "./Categories";
import Contacts from "./Contacts";
import PriceList from "./PriceList";
import "./Footer.scss";

const Footer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslations("Footer");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/footerData.json");
                const data = await response.json();
                setItems(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Загрузка...</p>;
    }

    return (
        <footer className="page-footer">
            <div className="footer-container">
                <CompanyInfo
                    logo={t("companyInfo.logo")}
                    logoAlt={t("companyInfo.logoAlt")}
                    description={t("companyInfo.description")}
                    subscribeLabel={t("companyInfo.subscribeLabel")}
                    subscribePlaceholder={t("companyInfo.subscribePlaceholder")}
                />
                <SiteMenu
                    title={t("siteMenu.title")}
                    items={items.siteMenu.items.map((item) => ({
                        name: t(`siteMenu.items.${item.name}`),
                        link: item.link,
                    }))}
                />
                <Categories
                    title={t("categories.title")}
                    items={items.categories.items.map((item) => ({
                        name: t(`categories.items.${item.name}`),
                        link: item.link,
                    }))}
                />
                <PriceList
                    title={t("priceList.title")}
                    buttonLabel={t("priceList.buttonLabel")}
                    messengersLabel={t("priceList.messengersLabel")}
                />
                <Contacts
                    title={t("contacts.title")}
                    phone={t("contacts.phone")}
                    workTime={t("contacts.workTime")}
                    email={t("contacts.email")}
                    orderCallRefLabel={t("contacts.orderCallRefLabel")}
                    orderCallRefHref={t("contacts.orderCallRefHref")}
                />
            </div>
        </footer>
    );
};

export default Footer;
