class User{

    constructor (username,tags){
        this.username = username;
        this.tags = tags;
        this.followers=[];
    }

    addFollower(user){
        this.followers.push(user);
    }
}




// getFollowers(tag){

// }


let jimmy = new User("jimmy1",["good","bad"]);
jimmy.addFollower("john");
let jimmy2 = new User("jimmy2",["good","bad","worst"]);
jimmy.addFollower("john2");
let jimmy3 = new User("jimmy3",["yooo"]);
jimmy.addFollower("john3");
let jimmy4 = new User("jimmy4",["yooo","yoo"]);
jimmy.addFollower("john4");
console.log(jimmy2,jimmy,jimmy3,jimmy4);