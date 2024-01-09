import { FastifyInstance } from 'fastify'
import { z, string } from 'zod'
import { SecredoRepository } from '../model/segredo/SecredoRepository'
import SecredoService from '../model/segredo/SecredoService'

const secretiRepository = new SecredoRepository()
const secretiService = new SecredoService(secretiRepository)

export async function SecredoRoute(app: FastifyInstance) {
  app.get('/api/secredo', async (request, reply) => {
    const secretis = secretiService.findAllSecredos()
    reply.code(201).send(secretis)
  })

  app.post('/api/secredo', async (request, reply) => {
    const SecretiRequestSchema = z.object({
      segredo: string(),
      cor: string(),
      urlImage: string(),
    })

    try {
      const urlgato = await fetch('https://cataas.com/cat?json=true')

      const { _id } = await urlgato.json()

      const secret = SecretiRequestSchema.parse(request.body)

      const secreti = secretiService.createSecredo(secret)
      secreti.urlImage = `https://cataas.com/cat/${_id}`

      reply.code(201).send({ message: 'criado', secreti })
    } catch (error) {
      reply.code(400).send({ message: 'erro de validacao', error })
    }
  })
}
