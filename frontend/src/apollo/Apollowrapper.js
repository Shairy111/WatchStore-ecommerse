import React from 'react'

import {ApolloProvider} from '@apollo/client'
import {client} from './client'

function Apollowrapper({children}) {
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}

export default Apollowrapper
