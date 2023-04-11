// import {Routes, Route} from 'react-router-dom'
import Marama from './Marama'

function App() {
  return (
    <>
      <section className="hero is-medium is-black">
        <div className="hero-body">
          <p className="title">Marama</p>
        </div>
      </section>
      <nav className="level">
        <div className="level-item has-text-centered">
          <div className="column">
            <p className="title">He marama</p>
          </div>
        </div>
      </nav>
      <section className="section is-large ">
        <div className="container">
          <Marama />
        </div>
      </section>
    </>
  )
}

export default App
