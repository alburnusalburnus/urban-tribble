import React from 'react';
import ReactDOM from 'react-dom';
import Course from './Course';
import Total from './Total';

const App = () => {
    const course = [
        {
            name: 'Half Stack application development',
            parts: [
            { 
                name:'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            { 
                name:'Using props to pass data',
                exercises: 7,
                id: 2
            },
            { 
                name:'State of a component',
                exercises: 14,
                id: 3
            }
            ]
    },
    {
        name: 'Node.js',
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
        <Course course={course[0]}/>
        <Total course={course[0]}/>
        <Course course={course[1]}/>
        <Total course={course[1]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
