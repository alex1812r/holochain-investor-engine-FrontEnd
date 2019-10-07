import React from 'react'
import SpinnerLoad from './spinnerLoad'

export default { title: 'Spinner Load' }

export const Normal = () => <SpinnerLoad />
export const Big = () => <SpinnerLoad size="big"/>
export const FullScreen = () => <SpinnerLoad size="big" fullScreen / >