import React from 'react';

function Row(props) {
    console.log(props.dates)
    return (
        <ol>
            {props.dates.map(function(item, i) {
                return <li key={i} data-index={i} onClick={ alert(i) }>{item}</li>;
            })}
        </ol>
    );
}

export default Row;