import React from 'react'
import Stars from './stars'

export default { title: 'Stars' }

export const Normal = () => <Stars />

export const with_rating = () => <Stars rating={75} />