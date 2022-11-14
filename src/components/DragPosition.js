export default function DragPosition({children, dropMethod, clas}) {

  const dragOverMethod = (event) => {
    event.preventDefault();
  }

  return(
    <div
      className={clas}
      onDragOver={dragOverMethod}
      onDrop={dropMethod}
    >
      {children}
    </div>
  )
}
