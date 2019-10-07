import React from 'react'
import TeamRea from './teamRea'

export default { title: 'Team Rea' }

export const Team_REA = () => <TeamRea team={[
  {typeofrea: 'Type', provider: 'Provider 1', time: 'time', date: 'date', note: 'note', location: 'loaction' },
  {typeofrea: 'Type', provider: 'Provider 2', time: 'time', date: 'date', note: 'note', location: 'loaction' },
  {typeofrea: 'Type', provider: 'Provider 3', time: 'time', date: 'date', note: 'note', location: 'loaction' },
  {typeofrea: 'Type', provider: 'Provider 4', time: 'time', date: 'date', note: 'note', location: 'loaction' },
]}/>