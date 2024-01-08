import Secreti from './Secreti'

export class SecretiRepository {
  private secretos: Secreti[]

  constructor() {
    this.secretos = []
  }

  findAll(): Secreti[] {
    return this.secretos
  }

  create(secreto: Secreti) {
    this.secretos.push(secreto)
    if (this.secretos.length > 88) {
      this.secretos.shift()
    }
  }
}
