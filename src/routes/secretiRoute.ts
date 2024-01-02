import { FastifyInstance } from 'fastify'
import SecretiRepository from '../model/secretis/SecretiRepository'
import SecretiService from '../model/secretis/SecretiService'
import { z, string } from 'zod'

const secretiRepository = new SecretiRepository()
const secretiService = new SecretiService(secretiRepository)

export async function SecretiRoute(app: FastifyInstance) {
  app.get('/api/secreto', async (request, reply) => {
    const secretis = secretiService.findAllSecretis()
    reply.code(201).send(secretis)
  })

  app.post('/api/secreto', (request, reply) => {
    const SecretiRequestSchema = z.object({
      secret: string(),
    })

    try {
      const { secret } = SecretiRequestSchema.parse(request.body)

      const secreti = secretiService.createSecreti({
        secret,
      })
      reply.code(201).send({ message: 'criado', secreti })
    } catch (error) {
      reply.code(400).send({ message: 'erro de validacao', error })
    }
  })
}
