import React, { useState } from 'react';
import { connect } from "react-redux";
import logo from "../images/LOGO.svg";
import vector from "../images/Vector.png"

const TwoFactorAuth = (props) => {
    const [twoFactor, setTwoFactor] = useState();
    const [pending, setPending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setPending(true);
        fetch(`https://trojans-ec-bn-staging.onrender.com/api/v1/users/${props.user.token}/auth/validate`, {
            method: "POST",
            body: JSON.stringify({ token: parseInt(twoFactor) }),
            headers: { "Content-Type": "application/json"}
        }).then(async response => {
            setPending(false);
            const data = await response.json();
            console.log(data);
            // if(data.status === 200){
            // }else{
            //     console.log("login failed");
            // }
        }).catch(err => {
            console.log(err.message);
        })
    }

    return(
        <div className="two-factor-container">
            <img className="logo-image" src={logo} alt="logo" />
            <div className="div-design-one"></div>
            <div className="div-design-two"></div>
            <img className="vector-image" src={vector} alt="vector" />
            <div className="two-factor-form-div">
                <h1><b> Two Factor Authentication</b> </h1>
                {pending && <div className="loading">Loading...</div> }
                <form onSubmit={handleSubmit}>
                    <input className="two-factor-input" type="number" onChange={(e) => {
                        setTwoFactor(e.target.value);
                        }} required />
                    <br />
                    <button className="button two-fact-btn">Verify</button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(TwoFactorAuth);