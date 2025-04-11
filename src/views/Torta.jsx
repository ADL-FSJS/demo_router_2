import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

function Torta() {
    const { tortita } = useParams();
  return (
    <Fragment>
        <h2>Torta</h2>
        {tortita === "anís" && (
            <>
            <h1>🤢</h1>
            <h2>Uhhhh qué asco!</h2>
            </>
        )}
        <p>Tu torta es de {tortita}</p>
    </Fragment>
  )
}

export default Torta