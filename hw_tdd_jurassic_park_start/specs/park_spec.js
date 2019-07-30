const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park',
function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurasic Park', 25)
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 12);
    dinosaur2 = new Dinosaur('y-rex', 'vegan', 2);
    dinosaur3 = new Dinosaur('z-rex', 'testivore', 555);

  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurasic Park');
  });


  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 25)
  });

  it('should have a collection of dinosaurs', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.dinosaursCollection
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.dinosaursCollection
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.removeDinosaur(dinosaur2)
    const actual = park.dinosaursCollection
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3])
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.popularDinosaur
    assert.strictEqual(actual, dinosaur3 )
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
