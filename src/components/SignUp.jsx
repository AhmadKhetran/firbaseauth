import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignupComponent = ({ signUp }) => {

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const { email, name, password } = formData;

        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            alert("User Created")
            localStorage.setItem('accessToken', user.accessToken);
            localStorage.setItem('email', user.email);
            setLoading(false)
            console.log('user created', user.email, user.accessToken)

        })
        .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Error Creating User:', errorCode, errorMessage)
                alert(errorMessage)
                setLoading(false)
            })
    };

    return (
        <>
            {loading ? (
                <>
                    <div style={loaderStyle}>
                        <h1>Looding...</h1>
                    </div>
                </>
            ) :
                (
                    <>
                        <div style={containerStyle}>
                            <h2 style={titleStyle}>Sign Up</h2>
                            <form style={formStyle} onSubmit={handleSubmit}>
                                <input
                                    style={inputStyle}
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    style={inputStyle}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    style={inputStyle}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button style={submitButtonStyle} type="submit">Submit</button>
                            </form>
                            <div style={signinLinkContainerStyle}>
                                <span>Already have an account?</span>
                                <button style={signinLinkStyle} onClick={signUp}>Sign In</button>
                            </div>
                        </div>
                    </>
                )}
        </>
    );
};

// Inline styles
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
};

const titleStyle = {
    fontSize: '24px',
    marginBottom: '16px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const inputStyle = {
    width: '300px',
    padding: '8px',
    margin: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const submitButtonStyle = {
    width: '200px',
    padding: '8px',
    margin: '16px',
    background: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const signinLinkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
};

const signinLinkStyle = {
    marginLeft: '8px',
    background: 'none',
    border: 'none',
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
};

const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};





export default SignupComponent;