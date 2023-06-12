import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="pagination">
      <button onClick={onLeftClick}>
        <div>
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
        </div>
      </button>
      <div>
        {page}-{totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
