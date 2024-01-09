import Secreti from './Secreti'
import { SecretiRepository } from './SecretiRepository'

class SecretiService {
  private repository: SecretiRepository

  constructor(repository: SecretiRepository) {
    this.repository = repository
  }

  findAllSecretis() {
    return this.repository.findAll()
  }

  createSecreti({ secret }: { secret: string }) {
    const newSecret = new Secreti(secret)

    this.repository.create(newSecret)

    return newSecret
  }
}

export = SecretiService
