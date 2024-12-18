'use client';

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import "./CategoriesList.scss";

export function handleSearch(category, searchParams, router){
    const newParams = new URLSearchParams(searchParams);
    const SEARCH_PARAM = "subcategories";
    const pathname = window.location.pathname;
    let subcategories = newParams.get(SEARCH_PARAM);
    if(!subcategories){
        newParams.set(SEARCH_PARAM, category);
    }
    else if(subcategories.includes(category)){
        subcategories = subcategories.includes("-"+category) 
            ? subcategories.replace("-"+category,"") 
            : subcategories.replace(category,"");
        subcategories = subcategories[0] == "-" ? subcategories.slice(1) : subcategories;
        newParams.set(SEARCH_PARAM, subcategories);
    }
    else{
        newParams.set(SEARCH_PARAM, subcategories+"-"+category)
    }
        
    router.push(`${pathname}?${newParams.toString()}`);
}
export default function CategoriesList({ category }) {
    const t = useTranslations("CatalogPage");
    const searchParams = useSearchParams();
    const router = useRouter();
    
    return (
        <section className="categories-section">
            {category.subcategories.map((subcategory,index) => (
                <div className={"categories-section__subcategory"} key={index}>
                    <label className="categories-section__subcategory-checkbox"><input type="checkbox"onChange={() => handleSearch(subcategory.id,searchParams,router)} />{t("locale") == "ru" ? subcategory.nameRu : subcategory.nameEn}</label>
                    <ul>
                        {(subcategory.subcategoriesRu).map((sub,index) => (
                            <li key={index}>
                                {sub}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
