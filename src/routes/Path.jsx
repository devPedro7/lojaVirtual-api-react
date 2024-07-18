import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";

const Path = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Path;