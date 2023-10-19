import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Register from '../components/Register';
import Login from '../components/Login';
import Forgotpassword from '../components/Forgotpassword';

function Home() {
    const [view, setView] = useState("signin");
    const [data, setData] = useState({ email: "", password: "" });
    const [dataForgot, setDataForgot] = useState({ forgotEmail: "" });
    const [checkData, setCheckData] = useState(false);
    const [showLoginModule, setLoginModule] = useState(false);
    // useEffect(() => {
    //     console.log(view)
    // });

    function handleChange(event) {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    function handleChangeForgot(event) {
        const { name, value } = event.target;
        setDataForgot(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    function checkHandleChange() {
        setCheckData(!checkData)
    }

    function submitData() {
        data['checkValue'] = checkData;
        console.log(data)
    }
    function submitDataForgot() {
        console.log(dataForgot)
    }
    function resetData() {
        setData({ email: "", password: "" })
        setCheckData(false)
    }
    function resetDataForgot() {
        setDataForgot({ forgotEmail: "" })
    }

    function signUpData() {
        resetData();
        resetDataForgot();
        setView("signup")
    }
    function handleReturn() {
        resetData();
        resetDataForgot();
        setView("signin");
    }
    function forgotPassword() {
        resetData();
        setView("forgotpassword");
    }
    function handleChangeLoginModule() {
        setLoginModule(true);
    }
    return (
        <>
            <Header loginModule={handleChangeLoginModule}/>
            <div className="body">
                {view == "signin" ?
                    <Login handleChange={handleChange} checkHandleChange={checkHandleChange} submitData={submitData} resetData={resetData} signUpData={signUpData} forgotPassword={forgotPassword} data={data} checkData={checkData} moduleView={showLoginModule}/>
                    : view == "forgotpassword" ?
                        <Forgotpassword handleChangeForgot={handleChangeForgot} dataForgot={dataForgot} onReturn={handleReturn} signUpData={signUpData} submitDataForgot={submitDataForgot} resetDataForgot={resetDataForgot} />
                        :
                        <Register onReturn={handleReturn} />
                }
            </div>
            <Footer />
        </>
    );
}

export default Home;