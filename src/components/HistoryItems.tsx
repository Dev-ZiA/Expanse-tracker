const HistoryItems = ({ historyitems }: any) => {
    const { title, Text } = historyitems;
    return (
        <><div className="list" id="list">
            <li className={Text < 0 ? "minus" : "plus"}>{title}<span>{Text}</span></li>

            {/* <li className="plus">
                memory <span>+$800</span><button className="delete-btn">x</button>
            </li> */}

        </div>
        </>
    );
}

export default HistoryItems;