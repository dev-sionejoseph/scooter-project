class User {

  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;  
  }

  login(password){
    if (this.loggedIn){
      throw new Error('user already logged in');
    }
    if (this.password === password){

      this.loggedIn = true;
      console.log('user has been logged in');
      
    } else {
      throw new Error('incorrect password')
    }
  }

  logout(){
    this.loggedIn = false;
  }
}

module.exports = User
