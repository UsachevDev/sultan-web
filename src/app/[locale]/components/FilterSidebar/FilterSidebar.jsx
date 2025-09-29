"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import FilterGroup from "./FilterGroup";
import ButtonUI from "components/UI/ButtonUI/ButtonUI";
import "./FilterSidebar.scss";

/**
 * props:
 * - products: any[] (данные каталога)
 * - onFilterChange?: (criteria) => void
 * - className?: string
 */
const FilterSidebar = ({ products = [], onFilterChange, className = "" }) => {
    const t = useTranslations("FilterSidebar");

    const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");
    const [selectedManufacturers, setSelectedManufacturers] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const getManufacturer = (p) => p?.manufacturer ?? p?.producer ?? "";
    const getBrand = (p) => p?.brand?.name ?? p?.brandName ?? "";

    const countBy = (arr) =>
        arr.reduce((acc, k) => {
            const key = String(k || "").trim();
            if (!key) return acc;
            acc[key] = (acc[key] || 0) + 1;
            return acc;
        }, {});

    const manufacturerCounts = useMemo(
        () => countBy(products.map(getManufacturer)),
        [products]
    );
    const brandCounts = useMemo(
        () => countBy(products.map(getBrand)),
        [products]
    );

    const manufacturers = useMemo(() => Object.keys(manufacturerCounts), [manufacturerCounts]);
    const brands = useMemo(() => Object.keys(brandCounts), [brandCounts]);

    const applyFilters = () => {
        onFilterChange?.({
            manufacturers: selectedManufacturers,
            brands: selectedBrands,
            priceMin,
            priceMax,
        });
    };

    const resetFilters = () => {
        setPriceMin("");
        setPriceMax("");
        setSelectedManufacturers([]);
        setSelectedBrands([]);
        onFilterChange?.({
            manufacturers: [],
            brands: [],
            priceMin: "",
            priceMax: "",
        });
    };

    return (
        <div className={`filter ${className}`}>
            <section className="filter-section">
                <h2 className="filter-title">{t("title")}</h2>

                <div className="price-filter">
                    <label htmlFor="price-min" className="price-title">
                        <span className="price-title-span">{t("price")}</span> ₽
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
                        <span className="price-dash">-</span>
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
                countsMap={manufacturerCounts}
                selected={selectedManufacturers}
                setSelected={setSelectedManufacturers}
                t={t}
            />

            <hr className="filter-divider" />

            <FilterGroup
                titleKey="brand"
                items={brands}
                countsMap={brandCounts}
                selected={selectedBrands}
                setSelected={setSelectedBrands}
                t={t}
            />

            <div className="filter-actions">
                <ButtonUI className="filter-apply" size="lg" onClick={applyFilters}>
                    {t("show")}
                </ButtonUI>

                <ButtonUI
                    className="filter-trash"
                    size="lg"
                    icon="delete"
                    onClick={resetFilters}
                    aria-label={t("reset")}
                />
            </div>
        </div>
    );
};

export default FilterSidebar;
