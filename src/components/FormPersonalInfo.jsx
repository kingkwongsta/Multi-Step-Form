import { useState } from "react"

export default function FormPersonalInfo() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    function handleEmail(event) {
        setEmail(event.target.value)
        console.log(email)
    }

    return (
        <>
            <div className="form-personal">
                <h2 className="form-personal-title">Personal info</h2>
                <h4 className="form-personal-subtitle">Please provide your name, email address, and phone number.</h4>
                <form action="" className="form-personal-section">
                    <p className="form-personal-name-text">Name</p>
                    <input type="text" value={email} onChange={handleEmail} className="form-personal-name-input" />
                </form>
            </div>
        </>
    )
}