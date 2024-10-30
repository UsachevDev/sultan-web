const Categories = ({ title, items }) => (
    <div className="footer-section categories">
        <h3>{title}</h3>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default Categories;
