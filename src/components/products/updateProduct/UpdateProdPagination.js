/* eslint-disable react/prop-types */
import React from "react";
import FormPagenation from "../../shared/FormPagenation";

const Pagination = (props) => {
    const {
        cancelUpdate,
        firstPage,
        secondPage,
        prevPage,
        nextPage,
    } = props;
    return (
           <div className="flex justify-between items-center up-bottom-paginat">
            {firstPage && <FormPagenation firstPage={firstPage} nextPage={nextPage}/>}
            {secondPage && <FormPagenation secondPage={secondPage} prevPage={prevPage}/>}
                <div className="flex btn-cont-page">
                <button type="button" className="text-center mx-2 next nave-pg-btn text-white cursor-pointer" onClick={firstPage? nextPage: prevPage}>{firstPage? "Next":"Prev"}</button>
                <button type="button" className="text-center next nave-pg-btn text-white cursor-pointer" onClick={cancelUpdate}> Cancel </button>
                </div>
            </div>
    );
}

export default Pagination;
