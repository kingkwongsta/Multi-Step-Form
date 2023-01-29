import { useState } from "react"

export default function FormPersonalInfo({ handleNext }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    function handleName(event) {
        setName(event.target.value)
    }
    function handleEmail(event) {
        setEmail(event.target.value)
    }
    function handlePhone(event) {
        setPhone(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        handleNext();
        console.log(name, email, phone)
    }

    return (
        <>
            <div className="form-personal">
                <h2 className="form-personal-title">Personal info</h2>
                <h4 className="form-personal-subtitle">Please provide your name, email address, and phone number.</h4>
                <form onSubmit={handleSubmit} className="form-personal-section">
                    <p className="form-personal-form-text">Name</p>
                    <input type="text" value={name} onChange={handleName} className="form-personal-input" />
                    <p className="form-personal-form-text">Email Address</p>
                    <input type="email" value={email} onChange={handleEmail} className="form-personal-input" />
                    <p className="form-personal-form-text">Phone Number</p>
                    <input type="tel" value={phone} onChange={handlePhone} className="form-personal-input" />
                    <div>
                        <button className="form-personal-next">Next Step</button>
                    </div>
                </form>
            </div>
        </>
    )
}