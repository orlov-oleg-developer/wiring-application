import { useState } from "react"

import gameBgPAth from "../images/game-1-bg.svg"
import shieldPath from "../images/game-1-shield.svg"
import fusePositionPath from "../images/fuse-position.svg"
import fuse_1_Path from "../images/fuse-1.svg"
import fuse_2_Path from "../images/fuse-2.svg"
import fuse_3_Path from "../images/fuse-3.svg"
import fuse_4_Path from "../images/fuse-4.svg"

import DragPosition from "./DragPosition.js"
import DragableElement from "./DragableElement.js"
import Result from "./Result"

export default function FirstTask() {
  const [result, setResult] = useState(false)
  const [resultTitle, setResultTitle] = useState('')
  const [resultDescription, setResultDescription] = useState('')
  const [success, setSuccess] = useState(false)


  const answer = Number('1.5')

  const checkAnswer = (value, answer) => {
    return (value === answer)
  }

  const dropMethod = (event) => {
    const element = document.querySelector('.dragable__element_selected');
    const fuseRating = Number(element.querySelector('.game-1__fuse-text').textContent);

    if (checkAnswer(fuseRating, answer)) {
      setResultTitle('Верно');
      setResultDescription('Предохранитель номиналом в 1,5 А выдержит ток нагрузки');
      setSuccess(true);
      setResult(true);
    } else {
      setResultTitle('Ошибка');
      if(fuseRating < answer) {
        setResultDescription(`Предохранитель номиналом в ${fuseRating} А не выдержит ток нагрузки`);
      } else setResultDescription(`Предохранитель номиналом в ${fuseRating} А превышает требуемый номинал`);
      setSuccess(false);
      setResult(true);
    }

    element.querySelector('.game-1__fuse-text').textContent = '';

    document.querySelector('.game-1__fuse-state').classList.add('game-1__fuse-state_disable');

    event.currentTarget.prepend(element);
  }

  return(
  <>
  <section className="application main__application">
    <h1 className="application__title">Выбор защитных устройств</h1>
    <article className="application__task-container">
      <h2 className="application__task-title">Задача 1</h2>
      <p className="application__task-description">Выберете номинал предохранителя для защиты приведенного участка сети от перегрева.</p>
    </article>
    <section className="game-1">
        <img className="game-1__bg" src={gameBgPAth} alt="Изображение игры"/>
        <img className="game-1__shield" src={shieldPath} alt="Изображение игры"/>
        <DragPosition clas="game-1__fuse-position" dropMethod={dropMethod}>
            <img className="game-1__fuse-state" src={fusePositionPath} alt="Место под предохранитель" draggable="false"/>
        </DragPosition>
        <ul className="game-1__fuse-container">
          <DragableElement clas="game-1__fuse">
            <img className="game-1__fuse-image" src={fuse_1_Path} alt="Изображение предохранителя" draggable="false"/>
            <p className="game-1__fuse-text">0.5</p>
          </DragableElement>
          <DragableElement clas="game-1__fuse">
            <img className="game-1__fuse-image" src={fuse_2_Path} alt="Изображение предохранителя" draggable="false"/>
            <p className="game-1__fuse-text">1</p>
          </DragableElement>
          <DragableElement clas="game-1__fuse">
            <img className="game-1__fuse-image" src={fuse_3_Path} alt="Изображение предохранителя" draggable="false"/>
            <p className="game-1__fuse-text">1.5</p>
          </DragableElement>
          <DragableElement clas="game-1__fuse">
            <img className="game-1__fuse-image" src={fuse_4_Path} alt="Изображение предохранителя" draggable="false"/>
            <p className="game-1__fuse-text">2</p>
          </DragableElement>
        </ul>
      </section>
    </section>
    {result && <Result success={success} title={resultTitle} description={resultDescription}/>}
  </>
  )
}
