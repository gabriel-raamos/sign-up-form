import React from "react"

interface TextFieldProp {
    whenChanged: (valor: string) => void,
    obrigatorio: boolean,
    valor: string,
    placeholder: string,
    tipo: 'text' | 'email' | 'password'
}

export default function TextField({ obrigatorio, valor, placeholder, tipo, whenChanged }: TextFieldProp) {

    // const placeholderModificada = `${placeholder}`

    const whenTyped = (event: React.ChangeEvent<HTMLInputElement>) => {
        whenChanged(event.target.value)
    }

    return (
        <section className="m-6 md:mx-0 p-4 rounded-lg bg-white border border-gray-300 text-gray-600 flex" >
            <input
                    required={obrigatorio == true}
                    value={valor}
                    placeholder={placeholder}
                    type={tipo}
                    onChange={whenTyped}
                    className="outline-none max-w-xl w-full"
                />
        </section>
    )
}
