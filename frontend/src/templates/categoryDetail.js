import React from 'react'
import {useQuery ,gql} from '@apollo/client'



const GET_DETAIL_WITH_ID = gql`
query getDetails($id: ID!) {
    brand(id: $id) {
      brandName
    }
  }
`

function  CategoryDetail({pageContext}) {

    const id = pageContext.strapiId
    const {loading , error , data} =  useQuery(GET_DETAIL_WITH_ID , {
        variables : {id : id}
    })


    
 
 
   
    return (

        <>
         
        {loading ? console.log("loading") : console.log(data)}
         
    
        </>
    )         
}

export default CategoryDetail
