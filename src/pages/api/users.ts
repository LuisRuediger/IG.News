import { NextApiRequest, NextApiResponse } from 'next' 

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Luis'},
    { id: 2, name: 'Felipe'},
    { id: 3, name: 'Ruediger'},
  ]

  return response.json(users)
}