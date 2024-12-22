"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const BasketContext = createContext();
export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const savedBasket = localStorage.getItem("basket");
        if (savedBasket) {
            setBasket(JSON.parse(savedBasket));
        }
    }, []);

    useEffect(() => {
        if (basket.length > 0) {
            localStorage.setItem("basket", JSON.stringify(basket));
            console.log("Saving Basket:", JSON.stringify(basket));
        }
    }, [basket]);

    const addToBasket = (product, quantity = 1) => {
        setBasket((prevBasket) => {
            const existingItem = prevBasket.find((item) => item.id === product.id);
            if (existingItem) {

                return prevBasket.map((item) =>
                    item.id === product.id ? { ...item, quantity: quantity } : item
                );
            }

            return [...prevBasket, { ...product, quantity: quantity }];
        });
    };

    const removeFromBasket = (productId) => {
        setBasket((prevBasket) => prevBasket.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setBasket((prevBasket) =>
            prevBasket.map((item) =>
                item.id === productId
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )
        );
    };

    const findInBasket = (productId) => {
        return basket.find((item) => item.id === productId);
    };

    const totalCost = basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    const totalQuantity = basket.reduce((total, item) => total + item.quantity, 0);

    return (
        <BasketContext.Provider
            value={{
                basket,
                addToBasket,
                removeFromBasket,
                updateQuantity,
                findInBasket,
                totalCost,
                totalQuantity,
            }}
        >
            {children}
        </BasketContext.Provider>
    );
};
