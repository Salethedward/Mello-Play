import React from 'react'

const pagination = (props) => {

    const pageNumbers = [];

    if(props.total) {
        for(let i = 1; i <= Math.ceil(props.total/props.perPage); i++) {
            pageNumbers.push(i)
        }
    }

    const pageNumberList = pageNumbers.map(number => (
        <li 
            key={number} 
            className={`page-item ${props.curPage === number ? "active" : null}`}>
            <button
                onClick={() => props.paginate(number)}
                className="bg-dark text-light">
                {number}
            </button>
        </li>
    ))

    return (
        <nav>
            <ul className="pagination justify-content-end">
                <span className="text-light mr-5 pt-2">PAGE: {props.curPage} / {pageNumbers.length}</span>
                <li className={`page-item ${props.curPage <= 1 ? "disabled" : null}`}>
                    <button className="bg-dark text-light border border-dark"
                        aria-label="Previous"
                        onClick={() => props.paginate(props.curPage - 1)} >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                { pageNumberList }

                <li className={`page-item ${props.curPage >= pageNumbers.length ? "disabled" : null}`}>
                    <button className="bg-dark text-light border border-dark"   
                        aria-label="Next"
                        onClick={() => props.paginate(props.curPage + 1)} >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default pagination