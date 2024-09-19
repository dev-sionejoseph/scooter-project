// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      'Shinjuku': [],
      'Shibuya': [],
      'Roppongi': [],
      'Akihabara': [],
      'Ueno': [],
      'Ginza': [],
      'Radiator Springs':[]
    }
    this.registeredUsers = {};
  }

  registerUser(username,password,age){
    if (this.registeredUsers[username] || age < 18){
      
      switch(age){
        case age < 18:
          throw new Error('too young to register');
        default: 
          throw new Error('user already exists');
      }

    } else{
     
      this.registerUser[username] = new User(username, password, age);
      console.log('user has been registered')
      return this.registerUser[username]
    
    }
  }

  loginUser(username, password){
    if (this.registeredUsers[username]){
      return user.login(username,password)
    } else {
      throw new Error('username does not exist')
    }
  }

  createScooter(station){
    if (this.stations[station]){
      let vroom = new Scooter(station)
      this.stations[station].push(vroom);

      return vroom;
    } else {
      throw new Error('station does not exist');
    }
  }

  dockScooter(scooter, station){
    if(this.stations[station]){
      this.stations[station].push(scooter);
      console.log("scooter is rented")
    } else {
      throw new Error('station does not exist');
    }
  }

  rentScooter(scooter, user){
    if (scooter['station'] != null){
      const key = scooter['station']
      const scooterIndex = this.stations[key].indexOf(scooter);
      scooter['user'] = user;
      this.stations[key].splice(scooterIndex,1)
      console.log('scooter rental successful!')
    } else {
      throw new Error('scooter already rented')
    }
  }

  print(){
    console.log(`All Stations: ${this.stations.keys().toString()}`)
    console.log(`Registered Users: ${this.registeredUsers.keys().toString()}`)
  }

}

module.exports = ScooterApp
