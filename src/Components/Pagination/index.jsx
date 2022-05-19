import React from "react";

const pageLimit = [1, 2, 3, 4, 5];

const Pagination = (props) => {
  const { currentPage, getPage } = props;

  return (
    <ul style={{display: "flex", justifyContent: "center"}}>
      {
        pageLimit.map((pageBtn) => {
          return (
            <li
              key={pageBtn}
              className={pageBtn === currentPage ? "active" : null}
              style={{
                margin: "0 .3rem",
                fontWeight: "bold",
                padding: "1rem",
                cursor: "pointer"
              }}
              onClick={() => getPage(pageBtn)}
            >
              {pageBtn}
            </li>
          )
        })
      }
    </ul>
  )
}

export default Pagination;