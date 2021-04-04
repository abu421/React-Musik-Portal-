import React, { useEffect } from "react";
import './Pagination.css';

const Pagination = ({setPage, page}) =>{

    //Events
    const PaginationHandler = (e) => {
        setPage(parseInt(e.target.text));
    }

    const SkipHandler = (e) => {
        let arrow = e.target.className;
        if(arrow === "backward")
        {
            if(page === 1)
                return;

            setPage(page - 1);
        }
        if(arrow === "forward")
        {   
            if(page === 5)
                return;

            setPage(page + 1);
        }
    }

    const activePageStyle = (PageIndex) => PageIndex+1 === page ? 'active' : null;

    const DisplayPages = () => {
        
        let pagesArray = [];

        for(let pageNo = 0; pageNo<5; pageNo++){
            pagesArray.push(
            <a key={pageNo} href="#" className={`${activePageStyle(pageNo)}`} onClick={PaginationHandler}>{pageNo + 1}</a>
            );
        }

        return pagesArray;
    }

    return(
        <div className="pagination">
            <a className="backward" href="#" onClick={SkipHandler}>&laquo;</a>
            {
                DisplayPages()
            }
            <a className="forward" href="#" onClick={SkipHandler}>&raquo;</a>
        </div>
    );
}

export default Pagination;