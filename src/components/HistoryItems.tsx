const HistoryItems = () => {
    return (
        <>
        <div className="container">
            <li className="plus">
                Salary <span>+$800</span><button className="delete-btn">x</button>
            </li>
            <li className="plus">
                Penssion <span>+$800</span><button className="delete-btn">x</button>
            </li>
            <li className="minus">
                Rent <span>-$400</span><button className="delete-btn">x</button>
            </li>
            <li className="minus">
                Shopping <span>+$500</span><button className="delete-btn">x</button>
            </li>
            <li className="minus">
                Food <span>+$100</span><button className="delete-btn">x</button>
            </li>
        </div>
        </>
    );
}

export default HistoryItems;