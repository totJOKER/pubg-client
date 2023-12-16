import React, { useState, useEffect } from 'react'
import { Oval } from  'react-loader-spinner'
import './Loader.css'


export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (<>
        {isLoading && 
            <div className='loader-box'>
            <Oval
                    height = "100"
                    width = "100"
                    color = '#DD94FF'
                    secondaryColor = "#DD94FF"
                    ariaLabel='loading'     
                />
            </div>
        }
    </>
  )
}
