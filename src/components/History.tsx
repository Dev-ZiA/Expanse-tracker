import HistoryItems from "./HistoryItems";

const History = () => {
    const historyItems = [
        {title: "Salary", Text: "+800"},
        {title: "Pension", Text: "+500"},
        {title: "Rent", Text: "-300"},
        {title: "Shopping", Text: "-400"},
        {title: "Food", Text: "-100"},
        {title: "Donatition", Text: "-200"},
    ]
    return(
        <>
        <div className="container">
        <h3>History</h3>
        <ul id="myUL">
            {historyItems.map(obj => (
                <HistoryItems historyitems={(obj)} />
                
            ))}
        </ul>
        </div>
        </>
    );
}

export default History;