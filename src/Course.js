import React from 'react';

const Course = ({course}) => {
    const courses= course.parts.map(data => <li key={data.id}>{data.name} {data.exercises}</li>)
    return(
        <div>
            <h1>{course.name}</h1>
            <ul>
                {courses}
            </ul>
        </div>
    )
}

export default Course;