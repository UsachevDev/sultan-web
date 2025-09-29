import ButtonUI from "../UI/ButtonUI/ButtonUI";
import "./Pagination.scss";

export const Pagination = ({currentPage, pageCount, method}) => {

    return <ol className="pagination">
        <li>
            <ButtonUI 
                icon="leftPointer"
                className="pagination-pointer"
                onClick={() => method(currentPage > 1 ? currentPage - 1 : currentPage)}
            />
        </li>   
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
        <li>
            <ButtonUI 
                icon="rightPointer"
                className="pagination-pointer"
                onClick={() => method(currentPage < pageCount ? currentPage + 1 : currentPage)}
            />
        </li>  
    </ol>
};

export default Pagination;
