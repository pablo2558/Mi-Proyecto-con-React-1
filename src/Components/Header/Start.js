import React from 'react'

const Inicio = () => {
  return (
    <div className="group inline-block">
      <button className="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-32 text-white">
        <span className="pr-1 flex-1">INICIO</span>
      </button>
      <div />

      <style>
        {`
       li > ul                 { transform: translatex(100%) scale(0) }
       li:hover>ul           { transform: translatex(101%) scale(1) }
       li > button svg       { transform: rotate(-90deg) }
       li:hover > button svg { transform: rotate(-270deg) }

       .scale-0 { transform: scale(0) }
       .min-w-32 { min-width: 8rem }`}
      </style>
    </div>
  );
}

export default Inicio