import React from 'react'

import PropsType from "prop-types"

export const GifItem = ({ title, url }) => {
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropsType.string.isRequired,
  url: PropsType.string.isRequired
}
