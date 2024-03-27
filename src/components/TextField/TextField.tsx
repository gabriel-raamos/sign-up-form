import React from "react"

interface TextFieldProp {
    whenChanged: (valor: string) => void,
    obrigatorio: boolean,
    valor: string,
    placeholder: string,
    tipo: 'text' | 'email' | 'password'
}

export default function TextField({obrigatorio, valor, placeholder, tipo, whenChanged}: TextFieldProp) {

    // const placeholderModificada = `${placeholder}`

    const whenTyped = (event: React.ChangeEvent<HTMLInputElement>) => {
        whenChanged(event.target.value)
    }

    return (
        <div className="m-6 rounded-xl shadow-2xl p-5" >
            <input
                required={obrigatorio == true}
                value={valor}
                placeholder={placeholder}
                type={tipo}
                onChange={whenTyped}
            />
        </div>
    )
}
