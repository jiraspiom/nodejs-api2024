import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
// import { SecretiRoute } from './routes/secretiRoute'
// import { BookingRoute } from './routes/bookingRoute'
import { SecredoRoute } from './routes/secredoRoute'

const app = fastify({ logger: true })

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'apitestebemtestadoporquetemdesertestadomuitomesmoantesdedarerro',
})

// app.register(SecretiRoute)
app.register(SecredoRoute)
// app.register(BookingRoute)

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  })
  .then(() => {
    console.log('👌 HTTP server rodando bunito!')
  })
