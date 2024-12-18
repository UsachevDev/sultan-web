"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import { ProductsInARow } from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination";
import "./catalogPage.scss";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import ButtonUI from "../components/UI/ButtonUI/ButtonUI";

export default function Product({ params }) {
    const t = useTranslations("CatalogPage");
    const currentLocale = useLocale();
    const urlParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);

    const [data, setData] = useState([]);
    const [category, setCategory] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const CARDS_PER_PAGE = 3;

    const isRuLocale = currentLocale == "ru"; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseProducts = await fetch("/data/productDTOs_main.json");
                const responseCategories = await fetch("/data/categories.json");
                const categoriesData = await responseCategories.json();
                const productsData = await responseProducts.json();

                const category = categoriesData.find((category) => category.id == (urlParams.get(category) || 2));
                setData(productsData);
                setCategory(category);
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
        return <p>{isRuLocale ? "Загрузка..." : "Downloading..."}</p>;
    }

    return (
        <div className="page-catalog">
            <Breadcrumbs
                current={""}
            />

            <div className="page-catalog__wrapper">
                <h2 className="page-catalog__title">{isRuLocale ? category.nameRu : category.nameEn}</h2>
                <div className="page-catalog__sorting-bar">
                    <p>Сортировка</p>
                </div>
            </div>

            <div className="page-catalog__param-selector">
                {category.subcategories.map((subcategories,index) => (
                    <ButtonUI className="page-catalog__param-selector-subcategory" key={index}>{isRuLocale ? subcategories.nameRu : subcategories.nameEn}</ButtonUI>
                ))}
            </div>

            <div className="page-catalog__main-wrapper">
                <div>
                    <FilterSidebar className="page-catalog__filter-sidebar"/>
                    <CategoriesList category={category}/>
                </div>      
                <div className="page-catalog__product-grid">
                    <ProductsInARow cards={data.slice((currentPage - 1) * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE)} />
                    <Pagination currentPage={currentPage} pageCount = {Math.ceil(data.length / CARDS_PER_PAGE)} method = {setCurrentPage}/>
                </div>
            </div>
        </div>
    );
}
