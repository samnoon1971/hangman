import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function Word(props) {
    return (
        <div>
            <Typography variant="h5">Word : {props.word}</Typography>
        </div>
    )
}
