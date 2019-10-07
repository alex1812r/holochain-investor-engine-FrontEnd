import React from 'react'
import TeamMember from './teamMembers'

export default { title: 'Team Member' }

export const Team_Member = () => <TeamMember members={[
  { name: 'Name', profession: 'profession', linkedinUrl:'https://linkedinurl.com' },
  { name: 'Name', profession: 'profession', linkedinUrl:'https://linkedinurl.com' },
  { name: 'Name', profession: 'profession', linkedinUrl:'https://linkedinurl.com' }
]}/>