import { useState } from "react"
import Barang1 from './Barang1'
function App() {


    const [isRefresh, setIsRefresh] = useState(true);
    const setRefresh = (status) => {
        setIsRefresh(status);
    };

    return (
        <div className="app-content">
            <Barang1 setRefresh={setRefresh} isRefresh={isRefresh} />
        </div>
    );
}

export default App;