"use client";
import { useState, useEffect } from "react";

const useWidth = () => {
    const[width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        };
    }, []);

    return {
        isMobileSmall: width <= 375,
        isMobile: width > 375 && width <= 480,
        isTabletSmall: width > 480 && width <= 768,
        isTablet: width > 768 && width <= 1024,
        isTabletLarge: width > 1024 && width <= 1200,
        isLaptop: width > 1200 && width <= 1440,
        isDesktop: width > 1440
    }
}

export default useWidth;
