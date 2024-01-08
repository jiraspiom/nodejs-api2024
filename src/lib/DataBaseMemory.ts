import { randomUUID } from 'node:crypto'

interface VideoProps {
  descricao: string
}

export class DataBaseMemory {
  #videos = new Map()

  list() {
    return this.#videos.values()
  }

  create(video: VideoProps) {
    const videoId = randomUUID()

    this.#videos.set(videoId, video)
  }

  update(id: string, video: VideoProps) {
    this.#videos.set(id, video)
  }

  delete(id: string) {
    this.#videos.delete(id)
  }
}
