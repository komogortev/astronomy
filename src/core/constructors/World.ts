interface WorldSceneInterface {
  id: number
  start(): string
}

class WorldConstructor implements WorldSceneInterface {
  id: number
  constructor(id: number, ) {
    this.id = id
    console.log('World constructed', this.id)
  }

  start() {
    return `id: ${this.id}`
  }
}

export { WorldConstructor as World };
