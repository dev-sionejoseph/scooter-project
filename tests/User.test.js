const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  // test password
  test('password should be a string', () =>{
    expect(typeof user.password).toBe('string')
  })
  // test age
  test('age should be a number', () =>{
    expect(typeof user.age).toBe('number')
  })
})

// test login
describe("User method tests", () => {
  test('able to log in with correct password', ()=>{
    user.login('test123')
    expect(user.loggedIn).toBe(true);
  })
  
  test('login attempt with incorrect password throws error', () => {
    user.logout();
    
    expect(()=>{
      user.login('superwrong');
    }).toThrow("incorrect password")
  })
  
  // test logout
  
  test('logout functions properly', () => {
    user.login('test123');
    user.logout();
  
    expect(user.loggedIn).toBe(false);
  })
})
