import HistoryItems from "./HistoryItems";

const History = ({historyitems}: any) => {
    
    return(
        <>
        <div className="container">
        <h3>History</h3>
        <ul id="myUL">
            {historyitems.map((obj: any)=>(
                <HistoryItems historyitem={obj} />
                
            ))}
        </ul>
        </div>
        </>
    );
}

export default History;