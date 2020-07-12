import React from 'react'

export default function SearchBox({searchChange}) {
    return (
        <input
          className='ma2 pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robots'
          id='search'
          onChange={searchChange}
        />
    )
}