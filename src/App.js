import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Members from "./pages/Members/Members";
import Live from "./pages/Live/Live";
import Gallery from "./pages/Gallery/Gallery";
import Discography from "./pages/Discography/Discography";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
    return <div className="app">
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/members/*" element={<Members />}/>
            <Route path="/live" element={<Live />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/discography" element={<Discography />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>;
}

export default App;