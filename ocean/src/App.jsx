import './App.css'

function App() {
  return (
    <>
      <div className='card'>
        <h2 className='title'> Rick Sanchez</h2>
        <div className='tags'>
          <div className='tag'>
            <p>Humano</p>
          </div>
          <div className='tag'>
            <p>Pai</p>
          </div>
          <div className='tag'>
            <p>Cientista</p>
          </div>
        </div>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
      </div>
    </>
  )
}

export default App
