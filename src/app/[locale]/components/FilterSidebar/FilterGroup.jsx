"use client";

import { useState, useMemo } from "react";

const VISIBLE_INIT = 3;

const FilterGroup = ({ titleKey, items, selected, setSelected, t, countsMap = {} }) => {
    const [query, setQuery] = useState("");
    const [expanded, setExpanded] = useState(false);

    const filteredItems = useMemo(
        () => items.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
        [items, query]
    );

    const visibleItems = expanded ? filteredItems : filteredItems.slice(0, VISIBLE_INIT);
    const hasShowMore = filteredItems.length > VISIBLE_INIT;

    const toggleItem = (item) => {
        setSelected((prev) =>
            prev.includes(item) ? prev.filter((el) => el !== item) : [...prev, item]
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
                <button type="button" className="search-button" aria-label={t("search")}>
                    <span className="ui-icon ui-icon--search" />
                </button>
            </div>

            <ul className="filter-list">
                {visibleItems.map((item, index) => {
                    const id = `${titleKey}-${index}`;
                    const count = countsMap[item];
                    return (
                        <li key={item}>
                            <input
                                type="checkbox"
                                id={id}
                                checked={selected.includes(item)}
                                onChange={() => toggleItem(item)}
                            />
                            <label htmlFor={id}>
                                {item} {count != null && <span>({count})</span>}
                            </label>
                        </li>
                    );
                })}
            </ul>

            {hasShowMore && (
                <button
                    type="button"
                    className={`show-more ${expanded ? "show-more--opened" : ""}`}
                    onClick={() => setExpanded((v) => !v)}
                >
                    <span className="show-more__text">
                        {expanded ? t("showLess") : t("showAll")}
                    </span>
                    <span className="show-more__triangle" aria-hidden="true" />
                </button>
            )}
        </section>
    );
};

export default FilterGroup;
