import Secreti from './Secreto'
import { SecredoRepository } from './SecredoRepository'

interface SegredoProps {
  segredo: string
  cor: string
  urlImage: string
}

class SecretiService {
  private repository: SecredoRepository

  constructor(repository: SecredoRepository) {
    this.repository = repository
  }

  findAllSecredos() {
    return this.repository.findAll()
  }

  createSecredo(secret: SegredoProps) {
    const newSecret = new Secreti(secret)

    this.repository.create(newSecret)

    return newSecret
  }
}

export = SecretiService
