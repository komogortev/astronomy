interface WorldSceneSettings {
  // id: number,
  // container: any,
  // start(): string,

}

class WorldConstructor {
  id: number;
  container: any;

  // initialize defined props
  constructor(_id: number, container: any) {
    this.id = _id
    this.container = container
  }

  start() {
    console.log(this.id,  "World Scene started!")
    return `id: ${this.id}`
  }
}

export { WorldConstructor };
