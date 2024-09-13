class Scooter {
  static nextSerial = 1;

  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    this.charge = 100;
    this.isBroken = false;

    Scooter.nextSerial++;
  }

  rent(user){
    if (this.charge > 20 && !this.isBroken){
      this.station = null;
      this.user = user;
    } else {
      throw new Error("Scooter needs to charge or be repaired.")
    }
  }

  dock(station){
    this.station = station;
    this.user = null;
  }

  recharge(){

    while (this.charge < 100){

      setTimeout(()=> {    //increment charge every minute
        this.charge++
      }, 60000);

      setTimeout(()=> {  //console log charge percentage
        console.log(this.charge);
      }, 120000)

    }

  }
}

module.exports = Scooter
