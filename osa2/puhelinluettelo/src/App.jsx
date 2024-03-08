import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName, number: newNumber
    }
    if (persons.some(person => person.name == newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value) 
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}
           />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
           />
        </div>
        <div>
          <button type="submit" disabled={newName ===''}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(item => (<p key={item.name}>{item.name} {item.number}</p>
      ))}
    </div>
  )
}

export default App