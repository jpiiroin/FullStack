import { useState, useEffect } from 'react'
import personService from './services/persons.js'

const Filter = ({ newSearch, handlenewSearch }) => {
  return (
    <>
    filter shown with <input
      value={newSearch}
      onChange={handlenewSearch}
      />
    </>
  )
}

const Persons = ({ persons, newSearch }) => {
  function filterItems(arr, query) {
    return arr.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));
  }
  const filtered = filterItems(persons, newSearch)
  return (
    <>
    {filtered.map(item => <p key={item.name}>{item.name} {item.number}</p>)}
    </> 
  )
}

const PersonForm = ({ persons, newName, newNumber, 
  handleNameChange, handleNumberChange, setPersons, 
  setNewName, setNewNumber }) => {
  
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
      personService
        .create(personObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }
  
  return (
    <>
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
        <button type="submit" disabled={newName===''}>add</button>
      </div>
    </form>
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewnewSearch] = useState('')
  
  useEffect(() => {    
    console.log('effect')    
    personService     
      .getAll()
      .then(response => {        
        console.log('promise fulfilled')        
        setPersons(response.data)      
      })  
    }, [])  
    console.log('phonebook has', persons.length, 'persons')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value) 
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handlenewSearch = (event) => {
    console.log(event.target.value)
    setNewnewSearch(event.target.value)
  }
    
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch = {newSearch} handlenewSearch = {handlenewSearch}/>
      
      <h2>add a new</h2>
      <PersonForm
        persons = {persons}
        newName = {newName}
        newNumber = {newNumber}
        handleNameChange = {handleNameChange}
        handleNumberChange = {handleNumberChange}
        setPersons = {setPersons}
        setNewName = {setNewName}
        setNewNumber = {setNewNumber}
        />

      <h2>Numbers</h2>
      <Persons persons = {persons} newSearch = {newSearch}/>
    </div>
  )
}

export default App