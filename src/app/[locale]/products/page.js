"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Select from "react-select";

import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import { ProductsInARow } from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import ButtonUI from "../components/UI/ButtonUI/ButtonUI";
import { OPTIONS_EN, OPTIONS_RU } from "./constants.js";

import "./catalogPage.scss";

export default function Product({ params }) {
    const t = useTranslations("CatalogPage");
    const currentLocale = useLocale();
    const urlParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);

    const [data, setData] = useState([]);
    const [category, setCategory] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const [basicFiler, setBasicFilter] = useState('name');
    const CARDS_PER_PAGE = 9;

    const isRuLocale = currentLocale == "ru"; 
    const FILTER_OPTIONS = isRuLocale ? OPTIONS_RU : OPTIONS_EN;
    
    const setValue = () => {
        return basicFiler ? FILTER_OPTIONS.find(o => o.value == basicFiler) : " ";
    }
    const cardFilter = (filter) => {
        setBasicFilter(filter.value);
        switch(filter.value) {
            case "manufacturer":
                setData(data.sort((a,b) => a.manufacturer > b.manufacturer ? 1 : -1));
                break;
            case "name":
                setData(data.sort((a,b) => a.nameRu > b.nameRu ? 1 : -1));
                break;
        }
    }

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
                    <Select onChange={cardFilter} value={setValue()} options={FILTER_OPTIONS}/>
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
