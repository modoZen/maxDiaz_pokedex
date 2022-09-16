import { useState } from "react";

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const nextPage = () => { setCurrentPage(currentPage + 4); }
    const prevPage = () => { setCurrentPage(currentPage - 4); }

    return {
    currentPage,
    setCurrentPage,
    nextPage,
    prevPage
    }
}

export { usePagination }