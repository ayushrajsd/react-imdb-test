import React from "react";

function Pagination({handleNext, handlePrevious, pageNumber}) {
  return (
    <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2">
      <div onClick={handlePrevious}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNumber}</div>
      <div onClick={handleNext}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
