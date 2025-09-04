"use client";

import { useState, useMemo } from "react";

const FilterGroup = ({ titleKey, items, selected, setSelected, t }) => {
    const [query, setQuery] = useState("");

    const filteredItems = useMemo(
        () =>
            items.filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
            ),
        [items, query]
    );

    const toggleItem = (item) => {
        setSelected((prev) =>
            prev.includes(item)
                ? prev.filter((el) => el !== item)
                : [...prev, item]
        );
    };

    return (
        <section className="filter-section">
            <h3 className="filter-subtitle">{t(titleKey)}</h3>
            <div className="search-box">
                <input
                    type="text"
                    placeholder={t("search")}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-button">🔍</button>
            </div>
            <ul className="filter-list">
                {filteredItems.map((item, index) => {
                    const id = `${titleKey}-${index}`;
                    return (
                        <li key={item}>
                            <input
                                type="checkbox"
                                id={id}
                                checked={selected.includes(item)}
                                onChange={() => toggleItem(item)}
                            />
                            <label htmlFor={id}>{item}</label>
                        </li>
                    );
                })}
            </ul>
            <button className="show-more">{t("showAll")}</button>
        </section>
    );
};

export default FilterGroup;
