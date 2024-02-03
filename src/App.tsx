import bottomImg from './assets/bottom.png'
import './App.css'
import Todo from './Todo'

function App() {
  return (
    <>

      <div style={{ marginLeft: '-7px', marginBottom: '-7px'}} >
        <Todo/>
      </div>

      <div>
        <img style={{display: 'block'}} src={bottomImg} className="bottom" />
      </div>
    </>
  )
}

export default App