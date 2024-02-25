const Course = ({ course }) => {
  return (
    <div>
      {course.map(course => <Content key={course.id} course={course} />)}
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

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Name = ({ course }) =>
  <>
    {course.map(part => <Part key={part.id} part={part} />)}
  </>

const Content = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Name course={course.parts} />
      <Total course={course.parts} />
    </div>
  )
}

export default Course