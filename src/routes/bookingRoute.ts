import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import BookingRepository from '../model/bookings/BookingRepository'
import BookingService from '../model/bookings/BookingService'

const bookingRepository = new BookingRepository()
const bookingService = new BookingService(bookingRepository)

export async function BookingRoute(app: FastifyInstance) {
  app.post('/api/booking', (request, reply) => {
    const BookingRequestSchema = z.object({
      roomId: z.string(),
      guestName: z.string(),
      checkInDate: z.string(),
      checkOutDate: z.string(),
    })
    try {
      const { roomId, guestName, checkInDate, checkOutDate } =
        BookingRequestSchema.parse(request.body)

      const booking = bookingService.createBooking({
        roomId,
        guestName,
        checkInDate,
        checkOutDate,
      })
      reply.code(201).send({ message: 'criado', booking })
    } catch (error) {
      reply.code(400).send({ message: 'erro de validacao', error })
    }
  })

  app.get('/api/booking', (request, reply) => {
    const bookin = bookingRepository.findAll()
    reply.code(201).send(bookin)
  })
}
