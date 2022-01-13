import { useState } from "react";
import Formkat1 from "./Formkat1";
function App() {
  const [isRefresh, setIsRefresh] = useState(true);
  const setRefresh = (status) => {
    setIsRefresh(status);
  };

  return (
    <div className="app-content">
      <Formkat1 setRefresh={setRefresh} isRefresh={isRefresh} />
    </div>
  );
}

export default App;
