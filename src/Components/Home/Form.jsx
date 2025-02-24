import { useNavigate } from 'react-router-dom';
import {database} from '../FirebaseLogin/FirebaseConfig'
import { signInWithRedirect } from 'firebase/auth'; 

const Form = () => {
    const history = useNavigate();

    const handleClick = () => {  
      
        signInWithRedirect(database).then(val => {  
            console.log(val, "val");
            history('/dashboard');  
        });
    };

    return (
        <div className="flex flex-col place-items-center m-72 border-solid border-2 border-blue-400 w-80">
            <h1 className="text-center text-4xl text-black mt-5 mb-10">Fill the Form?</h1>
            <form action="">
                <label>Fill full name: 
                    <input type="text" className="m-3 text-center border-solid border-2 border-blue-400" 
                    placeholder='Enter your full name:' required />
                </label><br />
                <input type="text" className="border-solid border-2 m-3 text-center border-blue-400"
                placeholder='Fill your address' required /><br />
                <input type="text" className="border-solid m-3 text-center border-2 border-blue-400" 
                placeholder='Fill your job:' /><br />
                <input type="text" className="border-solid m-3 text-center border-2 border-blue-400" 
                placeholder='Fill your age' /><br />
                <input type="text" className="border-solid m-3 text-center border-2 border-blue-400" 
               placeholder='Fill your sex' /><br />

                <button onClick={handleClick} className='bg-green-800 w-20 text-white mb-10'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
