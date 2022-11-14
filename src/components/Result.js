import { useEffect, useRef } from "react"

export default function Result({success, title, description}) {

  const scollToRef = useRef();

  useEffect( () => {
    scollToRef.current.scrollIntoView()
  }, [])

  return (
    <section ref={scollToRef} className={`application__result-container ${success ? 'application__result-container_success' : ''}`}>
      <h2 className="application__result-title">{title}</h2>
      <p className="application__result-description">{description}</p>
      <button className="application__result-button">
        <p className="application__result-button-text">{success ? 'Продолжить' : 'Попробовать еще раз'}</p>
      </button>
    </section>
  )
}
