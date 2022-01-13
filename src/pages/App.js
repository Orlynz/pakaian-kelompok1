import { useState } from "react";
import DataPembeli from "./DataPembeli";

function App() {
  const [isRefresh, setIsRefresh] = useState(true);
  const setRefresh = (status) => {
    setIsRefresh(status);
  };
  return (
    <div>
      <DataPembeli setRefresh={setRefresh} isRefresh={isRefresh} />
    </div>
  );
}

export default App;
