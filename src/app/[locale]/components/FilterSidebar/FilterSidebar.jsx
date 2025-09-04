"use client"

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import products from "@/../public/data/products.json";
import FilterGroup from "./FilterGroup";
import "./FilterSidebar.scss";

const FilterSidebar = ({ onFilterChange }) => {
    const t = useTranslations("FilterSidebar");
    const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");
    const [selectedManufacturers, setSelectedManufacturers] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const manufacturers = useMemo(
        () =>
            Array.from(
                new Set(
                    products
                        .map((p) => p.manufacturer)
                        .filter((m) => m)
                )
            ),
        []
    );

    const brands = useMemo(
        () =>
            Array.from(
                new Set(
                    products
                        .map((p) => p.brand?.name)
                        .filter((b) => b)
                )
            ),
        []
    );

    const applyFilters = () => {
        if (onFilterChange) {
            onFilterChange({
                manufacturers: selectedManufacturers,
                brands: selectedBrands,
                priceMin,
                priceMax,
            });
        }
    };

    const resetFilters = () => {
        setPriceMin("");
        setPriceMax("");
        setSelectedManufacturers([]);
        setSelectedBrands([]);
        if (onFilterChange) {
            onFilterChange({
                manufacturers: [],
                brands: [],
                priceMin: "",
                priceMax: "",
            });
        }
    };

    return (
        <div className="filter">
            <section className="filter-section">
                <h2 className="filter-title">{t("title")}</h2>
                <div className="price-filter">
                    <label htmlFor="price-min">
                        <span className="price-title-span">{t("price")}</span> ₸
                    </label>
                    <div className="price-inputs">
                        <input
                            type="number"
                            id="price-min"
                            placeholder="0"
                            min="0"
                            value={priceMin}
                            onChange={(e) => setPriceMin(e.target.value)}
                        />
                        <span>-</span>
                        <input
                            type="number"
                            id="price-max"
                            placeholder="10 000"
                            min="0"
                            value={priceMax}
                            onChange={(e) => setPriceMax(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            <FilterGroup
                titleKey="manufacturer"
                items={manufacturers}
                selected={selectedManufacturers}
                setSelected={setSelectedManufacturers}
                t={t}
            />

            <FilterGroup
                titleKey="brand"
                items={brands}
                selected={selectedBrands}
                setSelected={setSelectedBrands}
                t={t}
            />


            <div className="filter-actions">
                <button className="apply-button" onClick={applyFilters}>
                    {t("show")}
                </button>
                <button className="reset-button" onClick={resetFilters}>
                    {t("reset")}
                </button>
            </div>
        </div>
    );
};

export default FilterSidebar;
