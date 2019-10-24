import React from 'react';

const Total = ({course}) => {
    const amount = course.parts.reduce((currentValue, accumulator) => {
        return accumulator.exercises + currentValue;
    }, 0 ); 
        return (
          <div>
            <p>Kursseja yhteensä: {amount}</p>
          </div>
        )
    }

    export default Total;