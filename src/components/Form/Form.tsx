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
        <div className="bg-white rounded-lg md:px-0 m-7 mb-20 boxshadow flex justify-center max-w-sm md:max-w-3xl md:w-full" >

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

                <div className="flex justify-center" >
                    <button
                        className="bg-submitGreen hover:bg-submitSoftGreen duration-300 boxshadowinput text-white p-2 px-5 mb-5 font-bold md:max-w-sm md:w-full rounded-lg">
                        CLAIM YOUR FREE TRIAL
                    </button>
                </div>


                <p className="text-center text-sm text-gray-400 mb-5 md:px-6" >
                    By clicking the button, you are agreeing to our <b className="text-softPink cursor-pointer" >Terms and Services</b>
                </p>

            </form>

        </div>
    )
}