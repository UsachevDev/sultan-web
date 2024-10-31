"use client";
import { useEffect, useState } from "react";
import CompanyInfo from "./CompanyInfo";
import SiteMenu from "./SiteMenu";
import Categories from "./Categories";
import Contacts from "./Contacts";
import "./Footer.css";
import PriceList from "./PriceList";

const Footer = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/data/footerData.json")
            .then((res) => res.json())
            .then(setData);
    }, []);

    if (!data) return null;

    return (
        <footer className="page-footer">
            <div className="footer-container">
                <CompanyInfo {...data.companyInfo} />
                <SiteMenu {...data.siteMenu} />
                <Categories {...data.categories} />
                <PriceList {...data.priceList} />
                <Contacts {...data.contacts} />
            </div>
        </footer>
    );
};

export default Footer;
