///=====destructuring====///

const user = {
    name: "Reed",
    username: "Reedbarger",
    email: "reed@gmail.com",
    details: {
      title: "Programmer"  
    }  
  };
  
  const { username, email,details:{title} ,name} = user;
  
  function displayUser() {
    console.log(`username: ${username}, email: ${email}`);  
  }
  
 // displayUser()


 function displayUserBio() {
    console.log(`${name} is a ${title}`); 
  }
  
  //displayUserBio()


  function display({ name, details: { title} }) {
    console.log(`${name} is a ${title}`); 
  }
  
  //display(user);


  const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}

const { beer, coffe } = recommendations;

const { traditional, jazz } = recommendations.music;

//console.log(jazz);


function displayMusicPlaces({ music: { traditional, jazz } }) {
    console.log(`Head to ${traditional} or ${jazz} to listen to great music!`)
}

// displayMusicPlaces(recommendations);

//==============spread operator ================//

const user1 = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""  
  };
  
  const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"  
  };
  
  const createdUser = { ...user1 ,...newUser , verified: false};
//   console.log(createdUser);
//   console.log(user1);


///==================The Map object=================///

const map1 = new Map([
    [1, 1],
    [true, true]  
  ]);
  
  map1.set('key', 'value');

 // console.log(map1);

//  console.log([...map1.keys()]);
//  console.log([...map1.values()])

map1.forEach((value, key) => {
   // console.log(key, value);  
  });

  ///=========================================///

  const temperatures = [69, 82, 73, 64];

console.log(  temperatures.includes("yoo"));
console.log(  temperatures.includes(69));