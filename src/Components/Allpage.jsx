import Login from './Login';
import Dashbord from './Home/Dashbord';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

const Allpage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashbord" element={<Dashbord/>}/>
             
                    

                
            </Routes>

        </BrowserRouter>
    );
};

export default Allpage;