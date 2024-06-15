import React from 'react'

const ButtonDiv = ({classname, text, ruta}) => {
    return (
        <a href={ruta} className={`text-center w-1/4 bg-[#90c225] hover:bg-[#f4ba04] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ${classname}`}>
            {text}
        </a>
    )
}

export default ButtonDiv