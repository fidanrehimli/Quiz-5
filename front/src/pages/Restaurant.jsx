import React from 'react'
import {Helmet} from "react-helmet";

const Restaurant = () => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Restaurant</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    </div>
  )
}

export default Restaurant
