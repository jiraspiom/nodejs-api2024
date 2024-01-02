import Booking from './Booking'

class BookingRepository {
  private bookings: Booking[]

  constructor() {
    this.bookings = []
  }

  findAll(): Booking[] {
    return this.bookings
  }

  create(booking: Booking): void {
    this.adicionarRegistro(booking)
  }

  private adicionarRegistro(booking: Booking): void {
    this.bookings.push(booking)
    if (this.bookings.length > 88) {
      this.bookings.shift()
    }
  }
}

export = BookingRepository
