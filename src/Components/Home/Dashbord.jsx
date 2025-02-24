import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { database } from "../../FirebaseLogin/FirebaseConfig";


const Dashbord = () => {
  const history = useNavigate();

  const handleClick = () => {  
    
    signOut(database).then(val => {  
          console.log(val, "val");
          history('/login');  
      });
  };

    return (
        <div>
          <h1 className=""> 
             Well come to Dashbord page
          </h1>
          <button className="bg-red-600 text-white w-20 cursor-pointer rounded-3xl hover:bg-red-900 " 
            
          onClick={handleClick }>Logout</button>
        </div>
    );
};

export default Dashbord;