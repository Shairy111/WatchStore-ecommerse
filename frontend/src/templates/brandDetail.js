// should be renamed to brandDetail or something

import React from 'react'

function BrandDetail({pageContext}) {
    return (
        <>
            <h1>{pageContext.name}</h1>
        </>
    )
}

export default BrandDetail
