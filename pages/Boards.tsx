import React from 'react'
import { serverListBoards } from './api/boards/list'

async function getInitialProps(context) {
  if (typeof window === 'undefined') await serverListBoards({})
  return ({})
}

const Boards = () => {
  return <></>
}

Boards.getInitialProps = getInitialProps

export default Boards
