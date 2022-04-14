import { prisma } from 'lib/db'

export async function serverListBoards(query) {
  const boards = await prisma.board.findMany()
  return boards
}

export default async function apiListBoards(req, res) {
  const response = await serverListBoards(req.query)
  return res.status(200).json(response)
}
