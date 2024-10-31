const SiteMenu = ({ title, items }) => (
    <div className="footer-section site-menu">
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

export default SiteMenu;
