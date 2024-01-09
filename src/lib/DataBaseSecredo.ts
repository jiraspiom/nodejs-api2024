import { randomUUID } from 'node:crypto'

interface SecredoProps {
  segredo: string
  cor: string
  urlImage: string
}

export class DataBaseSecredo {
  #secredos = new Map()

  list() {
    return this.#secredos.values()
  }

  create(secredo: SecredoProps) {
    const videoId = randomUUID()

    this.#secredos.set(videoId, secredo)
  }

  update(id: string, secredo: SecredoProps) {
    this.#secredos.set(id, secredo)
  }

  delete(id: string) {
    this.#secredos.delete(id)
  }
}
