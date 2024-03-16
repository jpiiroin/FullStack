import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  
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

  const handleSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  function filterItems(arr, query) {
    return arr.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));
  }
    
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input
      value={newSearch}
      onChange={handleSearch}
      />
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
        {filterItems(persons,newSearch).map(item => (<p key={item.name}>{item.name} {item.number}</p>
        ))}
    </div>
  )
}

export default App