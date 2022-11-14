import { useState } from "react";

export default function DragableElement({clas, children}) {

  const [draged, setDraged] = useState('')

  const dragStartMethod = () => {
    setTimeout(() => {
      setDraged("dragable__element_selected")
    }, 0)
  }

  const dragEndMethod = () => {
    setTimeout(() => {
      setDraged("")
    }, 0)
  }

  return(
    <li
      draggable="true"
      className={`${clas} ${draged}`}
      onDragStart={dragStartMethod}
      onDragEnd={dragEndMethod}
      >
        {children}
    </li>
  )
}
