import Booking from './Booking'
import BookingRepository from './BookingRepository'

class BookingService {
  private repository: BookingRepository

  constructor(repository: BookingRepository) {
    this.repository = repository
  }

  findAllBookings() {
    return this.repository.findAll()
  }

  createBooking({
    roomId,
    guestName,
    checkInDate,
    checkOutDate,
  }: {
    roomId: string
    guestName: string
    checkInDate: string
    checkOutDate: string
  }) {
    const newBooking = new Booking(roomId, guestName, checkInDate, checkOutDate)

    this.repository.create(newBooking)

    return newBooking
  }
}

export = BookingService
