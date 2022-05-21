import React from 'react';
// const [errorMessages, setErrorMessages] = useState({});
// const [isSubmitted, setIsSubmitted] = useState(false);

// const renderErrorMessagerrorMessages.name && (
// //         <div c = (name) =>
//     name === elassName="error">{errorMessages.message}</div>
//     );
const Login = () => {
    return (
        <>
            <div className="container login-container">
                <h4>Login:</h4>
                <div className="container center login-form">
                    <div  className="container">
                        <form>
                            <div className="input-container">
                                <label>Username </label>
                                <input type="text" name="uname" required  />
                                {/*{renderErrorMessage("uname")}*/}
                            </div>
                            <div className="input-container">
                                <label>Password </label>
                                <input type="password" name="pass" required />
                                {/*{renderErrorMessage("pass")}*/}
                            </div>
                            <div className="button-container">
                                <button className='btn waves-effect waves-light'  type="submit" name='Login' > Login <i
                                    className="material-icons right">login</i></button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Login