class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = true
    this.phasersCharge = "uncharged"
    this.crew = crew
    this.assignCrew()
  }
  assignCrew() {
    if (this.crew.length > 0) {
      this.docked = false
      this.crew.forEach(CrewMember => {
        CrewMember.currentShip = this
      })
    }
  }
}
