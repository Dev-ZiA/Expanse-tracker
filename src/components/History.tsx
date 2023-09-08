import HistoryItems from "./HistoryItems";

const History = () => {
    return(
        <>
        <div className="container">
            <h3>History</h3>
                <ul id="list" className="list">
                    <HistoryItems />
                </ul>
        </div>
        </>
    );
}

export default History;