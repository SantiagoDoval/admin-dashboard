import React from 'react'
import { useStateContext } from '../context/ContextProvider';

const Button = ({color,bgColor,size,text,borderRadius,icon}) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
    type='button'
    onClick={() => setIsClicked(initialState)}
    style={{backgroundColor:bgColor,color,borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl `}>
    {icon}      {text}
    </button>

  )
}

export default Button