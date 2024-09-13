let Scooter;
let User;

beforeEach(() => {
  Scooter = require('../src/Scooter');
  User = require('../src/User');
})

afterEach(() =>{
  jest.resetModules();
})


// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})


// Method tests
describe('scooter methods', () => {

  // tests here!
  test('correctly assigns argument', () => {
    const station = "Shinjuku";
    const scoot = new Scooter(station);

    expect(scoot.station).toBe(station);
  })

  test('user initializes as null', () => {
    const weeee = new Scooter("Roppongi")

    expect(weeee.user).toBe(null);

  })

  test('serial number assigns and increments correctly', () => {
    const speedy = new Scooter("Shibuya");
    const wheels = new Scooter("Akihabara")

    expect(speedy.serial).toEqual(1);
    expect(wheels.serial).toEqual(2);
  })

  test('charge starts at 100', () => {
    const pyewn = new Scooter('Ginza');

    expect(pyewn.charge).toEqual(100);
    
  })

  test('isBroken initializes as false', () => {
    const skrt = new Scooter('Ueno');

    expect(skrt.isBroken).toBe(false);
    
  })

  // rent method

  test('rent method works properly with operational scooter', () => {
    const mcqueen = new User("lightning", "I<3mater", 20);
    const kachow = new Scooter("Radiator Springs")
    kachow.rent(mcqueen);
    
    expect(kachow.user).toBe(mcqueen)
    
  })

  test('rent method throws error with low battery/broken scooter', () => {
    const mcqueen = new User("lightning", "I<3mater", 20);
    const kachow = new Scooter("Radiator Springs")
    kachow.isBroken = true;
    
    expect(() => {
      kachow.rent(mcqueen);
    }).toThrow("Scooter needs to charge or be repaired.")
    
  })

  // dock method

  test('dock method works properly', () => {
    const mcqueen = new User("lightning", "I<3mater", 20);
    const kachow = new Scooter("Radiator Springs")
    kachow.rent(mcqueen);
    kachow.dock("London");

    expect(kachow.user).toBe(null);
    expect(kachow.station).toEqual("London")
    
  })

  // requestRepair method

  // charge method


})
