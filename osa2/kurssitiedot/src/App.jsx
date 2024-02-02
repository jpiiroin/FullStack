const Header = ({ course }) => 
  <h1>{course.name}</h1>

const Total = ({ sum }) => 
  <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>{part.name} {part.exercises}</p>

const Content = ({ course }) =>  
  <>
    {course.map(part => <Part key={part.id} part={part}/>)}
  </>
   
const Course = ({course}) => {
  return ( 
    <div>
      <Header course={course}/>
      <Content course={course.parts}/>
    </div>
    )
  }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App