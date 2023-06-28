import './styles/App.css'
import { useState } from 'react'
import Home from './components/Home'
import Thanks from './components/Thanks'
import Error from './components/Error'


const App = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [formValues, setFormValues] = useState({ name: '', age: '', email: '' })

  const over18 = () => {
    if (age < 18) {
      return <Error />
    }
    else {
      return <Thanks />
    }
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    // Uses bracket notation to access a key in state that is a match to the input's name and sets it to the input's value
    // This has already been hooked up for you!
  }

  const incrementPage = () => {
    setCurrentPage((prevState) => prevState + 1)
  }

  const reducePage = () => {
    setCurrentPage((prevState) => prevState - 1)
  }

  return (
    <div className="App">
      <Home
        currentPage={currentPage}
        name={formValues.name}
        age={formValues.age}
        email={formValues.email}
        incrementPage={incrementPage}
        reducePage={reducePage}
        handleChange={handleChange}
      />
    </div>
  )
}

export default App
