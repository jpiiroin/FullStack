const App = () => {
  const courses = [
  {
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
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses course={courses} />
    </div>
  )
}

const Courses = ({ course }) => {
  return (
    <div>
      {course.map(course => <Course key={course.id} course={course}/>)}
    </div>
  )
}

const Header = ({ course }) => 
  <h2>{course.name}</h2>

const Total = ({ course }) => {
  const sum = 0
  const total = course.map(
    part => part.exercises).
      reduce((a, b) => a + b, sum,)
  return (
    <b>total of {total} exercises</b>
  )
}

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
      <Total course={course.parts}/>
    </div>
    )
  }

export default App