import { useState, useEffect } from "react";
import { UidContext } from "./components/AppContext.js";
import Routes from "./components/routes/route.js";
import axios from "axios";

function App() {
  const [uid, setUid] = useState();
  useEffect(() => {
    const fetshToken = async () => {
      await axios({
        method: "get",
        url: "http://localhost:5000/jwtid",
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetshToken();
  }, [""]);

  return (
    <UidContext.Provider value={uid}>
      <div className="App">
        <Routes />
      </div>
    </UidContext.Provider>
  );
}

export default App;
