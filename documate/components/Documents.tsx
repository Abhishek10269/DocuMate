import React from 'react'
import Placeholderdocument from './Placeholderdocument';

function Documents() {
  return (
    <div className='flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto'>

        {/* map through document */}

        {/* placeholder document */}
        <Placeholderdocument/>
    </div>
  )
}

export default Documents;