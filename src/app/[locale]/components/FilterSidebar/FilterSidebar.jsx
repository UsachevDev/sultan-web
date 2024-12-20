import ButtonUI from "UI/ButtonUI/ButtonUI.jsx";
import Accordion from "../UI/Accordion/Accordion";
import "./FilterSidebar.scss";

const FilterSidebar = () => {
    return (
        <div className="filter">
            <section className="filter-section">
                <h2 className="filter-title">Подбор по параметрам</h2>
                <div className="price-filter">
                    <label for="price-title">
                        <span className="price-title-span">Цена</span> ₸
                    </label>
                    <div className="price-inputs">
                        <input
                            type="number"
                            id="price-min"
                            placeholder="0"
                            min="0"
                        />
                        <span>-</span>
                        <input
                            type="number"
                            id="price-max"
                            placeholder="10 000"
                            min="0"
                        />
                    </div>
                </div>
            </section>

            <section className="filter-section">
                <h3 className="filter-subtitle">Производитель</h3>
                <div className="search-box">
                    <input type="text" placeholder="Поиск..." />
                    <ButtonUI
                        className="search-button"
                        icon="search"
                        size="xs"
                    />
                </div>
                <ul className="filter-list">
                    <li>
                        <label>
                            <input type="checkbox" /> Grifon (56)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Boyscout (166)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Paclan (21)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Булгари Грин (21)
                        </label>
                    </li>
                </ul>
                <Accordion
                    title="Показать все"
                    className="show-more"
                ></Accordion>
            </section>

            <section className="filter-section">
                <h3 className="filter-subtitle">Бренд</h3>
                <div className="search-box">
                    <input type="text" placeholder="Поиск..." />
                    <ButtonUI icon="search" size="xs" />
                </div>
                <ul className="filter-list">
                    <li>
                        <label>
                            <input type="checkbox" /> Nivea (56)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> GRIFON (66)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Домашний сундук (166)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> HELP (21)
                        </label>
                    </li>
                </ul>
                <Accordion
                    title="Показать все"
                    className="show-more"
                ></Accordion>
            </section>

            <div className="filter-actions">
                <ButtonUI
                    className="apply-button"
                    label="Показать"
                    size="m"
                />
                <ButtonUI
                    className="reset-button"
                    icon="recycle-bin"
                    size="xs"
                />
            </div>
        </div>
    );
};

export default FilterSidebar;
