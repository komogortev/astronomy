interface WorldSceneInterface {
  id: number
  container: any,
  start(): string,

}

class WorldConstructor implements WorldSceneInterface {
  id: number
  container: any

  constructor(id: number, container: any) {
    this.id = id
    this.container = container
    console.log('World constructed', this.id)
  }

  start() {
    return `id: ${this.id}`
  }
}

export { WorldConstructor as World };
