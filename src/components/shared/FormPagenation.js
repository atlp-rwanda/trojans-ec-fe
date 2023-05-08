import React from "react";

const FormPagenation = (props) => {
    const { firstPage, secondPage, nextPage, prevPage } = props;
    return (
        <div data-testid="update-form-pagination" className="flex items-center my-5">
            <p className={`px-2 border mx-2 cursor-pointer bg-primaryColor ${firstPage ? "page" : "" }`} onClick={prevPage}>1</p>
            <p>of</p>
            <p className={`px-2 border mx-2 cursor-pointer bg-primaryColor ${ secondPage ? "page" : ""}` } onClick={nextPage}> 2 </p>
        </div>
    );
}

export default FormPagenation;