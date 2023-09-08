const HistoryItems = () => {
    return (
        <>
        <div className="container">
            <li className="plus">
                Salary <span>+$400</span><button className="delete-btn">x</button>
            </li>
            <li className="minus">
                Rent <span>-$400</span><button className="delete-btn">x</button>
            </li>
        </div>
        </>
    );
}

export default HistoryItems;