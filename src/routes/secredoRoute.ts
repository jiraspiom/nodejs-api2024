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
    })

    try {
      const secret = SecretiRequestSchema.parse(request.body)

      const retorno = await secretiService.createSecredo(secret)

      reply.code(201).send({ message: 'criado', retorno })
    } catch (error) {
      reply.code(400).send({ message: 'erro de validacao', error })
    }
  })
}
