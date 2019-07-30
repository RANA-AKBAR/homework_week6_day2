const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaursCollection = [];
}

Park.prototype.addDinosaur = function(dinosaurToAdd) {
  this.dinosaursCollection.push(dinosaurToAdd)
}

Park.prototype.removeDinosaur = function(dinosaurToRemove) {
  for (var i = 0; i < this.dinosaursCollection.length; i++) {
    return this.dinosaursCollection.splice(this.dinosaursCollection.indexOf(dinosaurToRemove), 1);
  }
}

Park.prototype.popularDinosaur = function() {
  let popular = 0
  let result_array = []
  for (dinosaur of dinosaursCollection) {
    if (dinosaur.guestsAttractedPerDay >> popular)
    popular = dinosaur.guestsAttractedPerDay
    result_array.push(dinosaur)
     }
     result= results_array[0]
  }


  Park.prototype.findBySpecies = function(species) {
    const filtered =  this.dinosaursCollection.filter( value => species);
    return filtered
  }

  Park.prototype.visitorsPerDay = function() {
    let popular = 0
    let result = null
    for (var i = 0; i < dinosaursCollection.length; i++) {
      (result +=dinosaursCollection[i].guestsAttractedPerDay)
    }
    console.log(result);
  }

  Park.prototype.visitorsPeryear = function() {
    let result = 12 * Park.prototype.visitorsPerDay
    console.log(result);
  }

  Park.prototype.visitorsPeryear = function() {
    let result = 12 * Park.prototype.visitorsPerDay
    console.log(result * this.ticketPrice);
  }

  module.exports = Park;
