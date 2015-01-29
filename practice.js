//Once you complete a problem, open up Chrome and check the answer in the console.

//Create an object called ME. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

    //Code here
    var ME = {
        name:'Kai',
        age:31
    };
    console.log(ME.name);
    //alert(ME.name);

//NEXT PROBLEM


//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

    //Code here
    favoriteThings = {
        band: 'Linkin Park',
        food: 'sushi',
        person: 'Mom',
        book: 'LOTR',
        movie: '300',
        holiday: 'Day Off'
    };

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

    //Code here

    favoriteThings.car = 'Ford';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

    //Code here
    favoriteThings.food = 'Lettuce';
    favoriteThings.book = '50 Shades of Gray';

    console.log(favoriteThings);
//NEXT PROBLEM


    /*Create an empty Object called backPack. Now, create a variable called 'item' and
     set it equal to firstPocket. Now, using bracket notation, add whatever 'item' represents
     as a property (or key) on the backPack object and set it's value equal to 'chapstick'.
     Now using dot notation add a key (or property) to your backPack object that is named color,
     with the value being the color of your backpack. */

    //Code here
    var backPack= { item: 'firstPocket' };

    backPack['item'] = 'chapstick';
    backPack.color = 'black';
//After you do the above, alert your entire backPack object.

    //Code here

   // alert(backPack);

    /*You probably noticed that it just alerted [Object Object].
     Alerting to see the data in your Object doesn't work so well.
     Instead, console.log your whole backPack object and then check out the console. */

    //Code here

    console.log(backPack);


//NEXT PROBLEM


//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

    //Code Here
    var me = {
        name: 'Kyle',
        age: 31,
        height: 177,
        gender: "male",
        married: false,
        eyeColor: "brown",
        hairColor: "black"
    };

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

    //Code Here

    var loopMe = function() {
        for (var p in me) {
            if (typeof me== "object") {
                console.log(me[p]);
                // alert(me[p]);
            }
        }

    };

    loopMe();


//NEXT PROBLEM


//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

    //Code Here
    var album = {
        faint: 99,
        singleLadies: 88,
        done: 97,
        helloWorld: 100,
        whatWhat: 101
    };


//Now, loop through your album object alerting every song title individually.

    //Code Here
    var loopAlbum = function() {
        for (var key in album) {
            if(typeof album =="object") {
                //alert(album.key);
                console.log(album[key]);
            }
        }
    };
    loopAlbum();

//NEXT PROBLEM


//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

    //Code Here
    var states = {
        California: 5000,
        Nevada:10000,
        Florida:150000,
        Kansas:200000,
        Wyoming:250000
    };


//Now, loop through your states object and if the states population is greater than 30K, alert that state.

    //Code Here
     var loopState = function(){
        for(var k in states){
            if(typeof states=="object") {
                if (states[k] > 30000) {
                    //alert(state.k);
                    console.log(states[k]);
                }
            }
        }
    };
    loopState();

//NEXT PROBLEM


    var user = {
        name: 'Tyler McGinnis',
        email: null,
        pwHash: 'U+Ldlngx2BYQk',
        birthday: undefined,
        username: 'tylermcginnis33',
        age: 0
    }
    /*Above you're given a user object. Loop through the user object checking to make sure
     that each value is truthy. If it's not truthy, remove it from the object. */

    //Code Here
    var loopTruthy = function () {
        for(var k in user){
            if (typeof user =="object") {
                if(!user[k]) {
                    delete user[k];
                }
            }
        }
        return user;
    };

    loopTruthy();
    console.log(user);

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

    //Code Here
    user.name= 'Kai';
    user.email= 'kai@gmail';
    user.pwHash= 'U+Ldlngx2BYQk';
    user.birthday= "june";
    user.username= 'kai';
    user.age= 31;


//NEXT PROBLEM


    var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function () {
            console.log('Email is : ' + this.email);
        }
    };
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

    //Code Here
    user2.name = 'Tyler S. McGinnis';
    user2.email = 'tyler.mcginnis@devmounta.in';

//Now call the sayName method that's on the user object which will alert the users email

    //Code Here
    user2.sayName();

//NEXT PROBLEM


//Create an empty object called methodCollection.

    //Code Here
    var methodCollection = {
        alertHello: function () {
            alert('hello');
        },
        logHello: function () {
            console.log('hello');
        }
    };
    /*Now add two methods (functions that are properties on objects) to your methodCollection
     object. One called 'alertHello' which alerts 'hello' and another method called logHello
     which logs 'hello' to the console. */

    //Code Here

//Now call your alertHello and logHello methods.

    //Code Here
    //methodCollection.alertHello();
    methodCollection.logHello();

//NEXT PROBLEM


    var devMountainEmployees = [];

    var tyler = {
        name: 'Tyler',
        position: 'Lead Instructor/Engineer',
        spiritAnimal: 'Honey Badger'
    };

    var cahlan = {
        name: 'Cahlan',
        position: 'CEO',
        spiritAnimal: 'butterfly'
    };

    var ryan = {
        name: 'Ryan',
        position: 'Marketing',
        spiritAnimal: 'fox'
    };

    var colt = {
        name: 'Colt',
        position: 'Everything really',
        spiritAnimal: 'Young Male Horse'
    };

    /*Above you're given an empty array with four objects. Fill the devMountainEmployees
     array with those four objects. After that console.log the length of the Array and make
     sure that it's equal to 4. */

    //Code Here
    devMountainEmployees.push(tyler, cahlan,ryan, colt);
    console.log(devMountainEmployees);

    /*Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
     Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

    //Code Here
    var removeCahlan = function () {
        for(var i = 0; i< devMountainEmployees.length; i++) {
            if(devMountainEmployees[i].name=='Cahlan'){
                devMountainEmployees.splice(i,1);
            }
        }
        console.log(devMountainEmployees);
    };
    removeCahlan();

//NEXT PROBLEM


    /*Now we're going to combine what we've learned today (objects) with what we learned
     yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
     Let's think back to our itunes example (tylermcginnis.com/itunes).
     Notice that when you type in an artist name, iTunes gives us back a LOT of data.
     What they're really giving us is an Array full of Objects. It probably looks something
     like this. */

    var data = [
        {
            artist: 'shakira',
            album: 'hips don\'t lie',
            tracks: 16,
        },
        {
            artist: 'shakira',
            album: 'mariposa',
            tracks: 12,
        },
        {
            artist: 'shakira',
            album: 'greatest hits',
            tracks: 19
        }
    ];


    /*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
     of Data is to have an Array full of objects. */

//Create an empty array called users.

    //Code Here
    var userss = [];
    /*Now add three user objects to your users array. Each user object should contain the
     following properties. name, email, password, username.*/

//include this object as one of your indices in your array.
    var user11 = {
        name: 'Tyler McGinnis',
        email: 'tylermcginnis33@gmail.com',
        password: 'iLoveJavaScript',
        username: 'infiniateLoop'
    };

//Your Code Here

    userss.push(user11);
    userss[1]= user11;
    userss[2]= user11;

    console.log(userss);
    /*Now you have a very common data structure. Twitter is a good use case.
     It's easy to imagine that your followers list on Twitter is an Array full or objects
     and those objects contain properties about the specific person you follow.*/

    /*Now let's say that Tyler decided to delete his account. Loop through your array of
     objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
     Once you find the particular indice he's located in, delete him from the array.*/

    //Code Here
    for(var i = 0; i< userss.length;i++) {
        if(userss[i].email == 'tylermcginnis33@gmail.com') {
            userss.splice(i,1);
        }
    }

    console.log(userss);
//The activity we just did is very much how data works in 'the real world'.



