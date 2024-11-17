import React from 'react'

const Button = ({ text, className }) => {
    return (
        <button className={`rounded-lg border-2 border-[#daa520] py-3 px-5 text-[#daa520] hover:bg-[#daa520] hover:text-white delay-300 ${className}`}>
            {text}
        </button>
    )
}

export default Button
