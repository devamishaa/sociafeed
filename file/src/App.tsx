import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Welcome } from "./components/Welcome";
import Feed from "./components/feed/Feed";
import ProfilePage from "./components/profile/Profile";

function App() {
  
    return (
        <div className="App">
            <Routes>
                {/* <Route path="/" element={<Home />}></Route> */}
                <Route path="/" Component={Welcome} />
                <Route path="/feed" Component={Feed} />
                <Route path="/profile" Component={ProfilePage} />
            </Routes>
            
        </div>
    );
}

export default App;
