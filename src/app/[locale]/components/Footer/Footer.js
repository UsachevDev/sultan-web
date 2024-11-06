"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import CompanyInfo from "./CompanyInfo";
import SiteMenu from "./SiteMenu";
import Categories from "./Categories";
import Contacts from "./Contacts";
import PriceList from "./PriceList";
import "./Footer.css";

const Footer = () => {
    const [data, setData] = useState(null);
    const t = useTranslations("Footer"); // Используем "Footer" для получения переводов

    useEffect(() => {
        fetch("/data/footerData.json")
            .then((res) => res.json())
            .then(setData);
    }, []);

    if (!data) return null;

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
                    items={data.siteMenu.items.map(item => ({
                        name: t(`siteMenu.items.${item.name}`), 
                        link: item.link
                    }))} 
                />
                <Categories 
                    title={t("categories.title")} 
                    items={data.categories.items.map(item => ({
                        name: t(`categories.items.${item.name}`), 
                        link: item.link
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