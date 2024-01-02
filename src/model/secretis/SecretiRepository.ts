import Secreti from './Secreti'

class SecretiRepository {
  private secretos: Secreti[]

  constructor() {
    this.secretos = []
  }

  findAll(): Secreti[] {
    return this.secretos
  }

  create(secreto: Secreti): void {
    this.adicionarRegistro(secreto)
  }

  private adicionarRegistro(secreto: Secreti): void {
    this.secretos.push(secreto)
    if (this.secretos.length > 88) {
      this.secretos.shift()
    }
  }
}

export = SecretiRepository
