"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import { ProductsInARow } from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination";
import "./catalogPage.scss";
import CategoriesList from "../components/CategoriesList/CategoriesList";

export default function Product({ params }) {
    const t = useTranslations("CatalogPage");
    const urlParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/productDTOs_main.json");
                const data = await response.json();
                setData(data);
                setCardsCount(data.length);
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>{t("locale") === "ru" ? "Загрузка..." : "Downloading..."}</p>;
    }

    return (
        <div className="page-catalog">
            <Breadcrumbs
                current={""}
            />

            <div className="page-catalog__wrapper">
                <h2 className="page-catalog__title">{t("title")}</h2>
                <div className="page-catalog__sorting-bar">
                    <p>Сортировка</p>
                </div>
            </div>

            <div className="page-catalog__param-selector">
                <p>Параметры выбора</p>
            </div>

            <div className="page-catalog__main-wrapper">
                <div>
                    <FilterSidebar className="page-catalog__filter-sidebar"/>
                    <CategoriesList categoryId={urlParams.get("category") || 2}/>
                </div>      
                <div className="page-catalog__product-grid">
                    <ProductsInARow cards={data.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)} />
                    <Pagination currentPage={currentPage} pageCount = {Math.ceil(data.length / cardsPerPage)} method = {setCurrentPage}/>
                </div>
            </div>
        </div>
    );
}
