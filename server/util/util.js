import Crypto from 'crypto'
import { promisify } from 'util'


const randomBytes = promisify(Crypto.randomBytes).bind(Crypto)
export const generateId = async () => {
  let bytes = await randomBytes(5)
  return bytes.toString('hex')
}