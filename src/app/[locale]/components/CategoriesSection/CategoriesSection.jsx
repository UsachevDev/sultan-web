"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './CategoriesSection.scss';

const CategoriesSection = () => {
    const [title, setTitle] = useState({});
    const [subtitle, setSubtitle] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('/data/categoriesData.json');
            const data = await response.json();
            setTitle(data.title);
            setSubtitle(data.subtitle);
            setItems(data.items);
        };

        fetchCategories();
    }, []);

    return (
        <div className="categories-section">
            <h2>{title.title}<span>{title.titleSpan}</span></h2>
            <p className="subtitle">{subtitle}</p>
            <ul className="categories-list">
                {items.map((item, index) => (
                    <li key={index} className="category-item">
                        <a href={item.link}>
                            <Image 
                                src={item.image} 
                                alt={item.name} 
                                className="category-image" 
                                width={250}
                                height={250}
                            />
                            <p className="category-name">{item.name}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesSection;
