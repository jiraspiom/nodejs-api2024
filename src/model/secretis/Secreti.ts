import { randomUUID } from 'crypto'

class Secreti {
  id: string
  secret: string
  createAt: Date

  constructor(secret: string) {
    this.id = randomUUID()
    this.secret = secret
    this.createAt = new Date()
  }
}

export = Secreti
