import React, { useState } from "react";
import TextField from "../TextField/TextField";

export default function Form() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className="bg-gray-100 rounded-lg px-7 m-7 mb-20 boxshadow flex justify-center max-w-sm" >

            <form onSubmit={onSave} >

                <TextField
                    obrigatorio={true}
                    valor={firstName}
                    placeholder={"First Name"}
                    tipo={"text"}
                    whenChanged={valor => setFirstName(valor)}
                />

                <TextField
                    obrigatorio={true}
                    valor={lastName}
                    placeholder={"Last Name"}
                    tipo={"text"}
                    whenChanged={valor => setLastName(valor)}
                />

                <TextField
                    obrigatorio={true}
                    valor={email}
                    placeholder={"Email Adress"}
                    tipo={"email"}
                    whenChanged={valor => setEmail(valor)}
                />

                <TextField
                    obrigatorio={true}
                    valor={password}
                    placeholder={"Password"}
                    tipo={"password"}
                    whenChanged={valor => setPassword(valor)}
                />

                <button 
                    className="bg-submitGreen boxshadowinput text-white p-2 mb-5">
                    CLAIM YOUR FREE TRIAL
                </button>

            </form>

        </div>
    )
}