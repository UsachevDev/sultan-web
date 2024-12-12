import ButtonUI from "../UI/ButtonUI/ButtonUI";
import "./Pagination.scss";

export const Pagination = ({currentPage, pageCount, method}) => {

    return <ol className="pagination">
        {[...Array(pageCount)].map((_, index) => (
                <li key={index+1}>
                    <ButtonUI label={index + 1} 
                        className={index + 1 == currentPage 
                            ? "pagination-number pagination-number-current" 
                            : "pagination-number"} 
                        onClick={() => method(index + 1)}
                    />
                </li>   
            ))}
    </ol>
};

export default Pagination;
