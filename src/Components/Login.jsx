import { useNavigate } from 'react-router-dom';
import { database } from '../FirebaseLogin/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = (e, type) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (type === "SignUp") {
            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData");
                navigate('/dashbord'); 
            }).catch(err => {
                alert(err.code);
                setLogin(true);
            });
        } else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData");
                navigate('/dashbord'); 
            }).catch(err => {
                alert(err.code);
            });
        }
    };

    return (
        <div className="grid grid-col shadow-sm shadow-black gap-4 place-items-center m-72 w-80 text-center border-solid border-2 sm (640px)">
            <h1 className="text-center text-4xl">{login ? "SignIn" : "SignUp"}</h1>
            <form onSubmit={(e) => handleSubmit(e, login ? "SignIn" : "SignUp")} className="">
                <label>Enter your email: 
                    <input name="email" className="border-solid border-2 border-black m-3 text-center" 
                        placeholder="Enter your Email..." 
                        required />
                </label><br />
                <label>Enter your password:
                    <input type="password" name="password" className="m-2 border-solid border-2 border-black text-center" 
                        placeholder="Enter your Password..." 
                        required />
                </label>
                <br />
                <p><span className="m-2"onClick={()=>setLogin(false)}>SignUp</span> Or 
                <span className="m-2"onClick={()=>setLogin(true)}>SignIn</span></p>
                <button className="bg-green-700 w-20 text-white rounded-3xl mb-10">
                    {login ? "SignIn" : "SignUp"} 
                </button>
            </form>
        </div>
    );
};

export default Login;
