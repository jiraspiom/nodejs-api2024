import { randomUUID } from 'crypto'

class Booking {
  id: string
  roomId: string
  guestName: string
  checkInDate: string
  checkOutDate: string

  constructor(
    roomId: string,
    guestName: string,
    checkInDate: string,
    checkOutDate: string,
  ) {
    this.id = randomUUID()
    this.roomId = roomId
    this.guestName = guestName
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
  }
}

export = Booking
