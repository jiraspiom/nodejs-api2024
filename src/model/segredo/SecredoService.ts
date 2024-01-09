import Secreti from './Secreto'
import { SecredoRepository } from './SecredoRepository'

interface SegredoProps {
  segredo: string
  cor: string
}
interface Segredo2Props {
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

  async createSecredo(secret: SegredoProps) {
    const url = await this.CriaUrlGato()
    const secreto: Segredo2Props = {
      segredo: secret.segredo,
      cor: secret.cor,
      urlImage: url,
    }

    const newSecret = new Secreti(secreto)

    this.repository.create(newSecret)

    return newSecret
  }

  async CriaUrlGato() {
    const urlgato = await fetch('https://cataas.com/cat?json=true')
    const { _id } = await urlgato.json()
    const url = `https://cataas.com/cat/${_id}`
    return url
  }
}

export = SecretiService
