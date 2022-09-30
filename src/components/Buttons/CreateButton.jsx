/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CreateButton({ fontAwesomeIcon, icon, text, type = 'button', className, clickFunction }) {
  return (
    <button
      type={type}
      className={`px-3 py-2 text-bold transition all 0.5s text-[#3b49df] border-2 border-[#3b49df] hover:bg-[#3b49df] rounded-md hover:text-[white] md:w-[100%] ${className}`}
      onClick={clickFunction}
    >
      {text}
      {icon && fontAwesomeIcon ? (
        <FontAwesomeIcon icon={icon} />
      ) : icon ? (
        <img src={icon} width={'32px'} style={{ display: 'inline-block' }} />
      ) : null}
    </button>
  )
}
export default CreateButton
