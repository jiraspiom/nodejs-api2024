import { randomUUID } from 'crypto'

interface SegredoProps {
  segredo: string
  cor: string
  urlImage: string
}

class Secreto {
  id: string
  segredo: string
  cor: string
  coracao: null
  urlImage: string
  createAt: string

  constructor(segredo: SegredoProps) {
    const dataAtual = new Date()
    dataAtual.setUTCHours(dataAtual.getUTCHours() - 3)

    this.id = randomUUID()
    this.segredo = segredo.segredo
    this.cor = segredo.cor
    this.coracao = null
    this.urlImage = segredo.urlImage
    this.createAt = dataAtual.toISOString()
  }
}

export = Secreto
