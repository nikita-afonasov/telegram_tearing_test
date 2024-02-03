import SwipeTodo from './SwipeTodo';
import './App.css'
import topImg from './assets/top.png'

export default function Todo() {

  return (
    <div className="todoWrapper">
      <SwipeTodo>
          <div className="todo">
          <div style={{margin: 0, marginBottom: 0, padding: 0}}>
            <img style={{display: 'block'}} src={topImg} className="top" draggable="false"/>
          </div>
          </div>
      </SwipeTodo>
    </div>
  )
}