// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["red", "blue", "green","yellow","black","pink","orange","purple","grey"]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "Ana",
        lastName: "Mosic"
    },
    {
        firstName: "Anita",
        lastName: "Pana"
    },
    {
        firstName: "Rob",
        lastName: "Robinson"
    },
    {
        firstName: "Sonia",
        lastName: "Aleksova"
    },
    {
        firstName: "Nick",
        lastName: "Paps"
    },
    {
        firstName: "Alex",
        lastName: "Androvic"
    },
    {
        firstName: "Maria",
        lastName: "Misic"
    }, {
        firstName: "Lena",
        lastName: "Alevra"
    },
    {
        firstName: "Joe",
        lastName: "Doe"
    }
]



function randomNumberGenerator(x ,y ){   
   let isUsersInput = false
    if(!x &&!y){
        x= parseInt(document.getElementById("rand1").value)
        y= parseInt(document.getElementById("rand2").value)

        isUsersInput=true;
    
        console.log(x,y)
    }
    
    let randomNum = Math.random()
    let multiply = x.toString().length
    
    switch(multiply){
        case 1 : multiply = 10; break;
        case 2 : multiply = 100; break;
        case 3 : multiply = 1000; break;
        case 4 : multiply = 10000; break;
    }
    

    randomNum =Math.floor(randomNum*multiply) ;

        
    while(randomNum<x || randomNum>y){
        randomNum = Math.random()
        randomNum =Math.floor(randomNum*multiply) ;
    }


    if(isUsersInput){
        document.getElementById("randomNumberP2").innerHTML= randomNum;
    }else{
        document.getElementById("randomNumberP").innerHTML= randomNum;
    }

}

function longLoremIpsumString(x){
    let newLorem=[];
    x= document.getElementById("NumOfSentences").value
    if(x){
  
      let numOfSentences = lorem.split(".")
      if(x>69){
        alert("There are 69 sentences. Your number should be less than 69")
        }

        for(let i=0;i<x; i++){
            newLorem.push(numOfSentences[i])
        }
      
        newLorem = newLorem.join(". ")
        document.getElementById("longStr2").innerHTML = newLorem
    }else{
        document.getElementById("longStr").innerHTML = lorem
    }
   
}

function loremBasedOnChars(x){
    x=document.getElementById("numOfChars").value

    let newLorem = "";
    if(x>3575){
        alert("There are 3575 characters. Your number should be less than 3575")
        }
    for (let i =0; i<x; i++){
        newLorem += lorem[i]
    }

    document.getElementById("longStr3").innerHTML = newLorem
}


function displayCurrentDate(){
    const newDate = new Date();
    console.log(newDate)
    document.getElementById("currentDate").innerHTML = newDate
}

function displayCurrentDate(){
    const newDate = new Date();
    document.getElementById("currentDate").innerHTML = newDate
}

function displayCurrentTime(){
    const newDate = new Date();

    document.getElementById("currentTime").innerHTML = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
}


function convertInchesToFeet(){
   let  inches =  document.getElementById("inches").value
   let  feet = inches*0.08333
    document.getElementById("inchesToFeet").innerHTML = feet
}

function convertFeetToInches(){
    let  feet =  document.getElementById("feet").value

    inches = 12*feet
    document.getElementById("feetToInches").innerHTML = inches
 
 }

 function compareLength(){
    const first = document.getElementById("first").value
    const second = document.getElementById("second").value
    if(first.length === second.length){
        document.getElementById("areTheSameLength").innerHTML = true
    }else if( first.length > second.length ){
        document.getElementById("areTheSameLength").innerHTML = false
    }else{
        document.getElementById("areTheSameLength").innerHTML = false
   }
 
 }

 
 function returnRandomPassword(){
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const calpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '1234567890';
    const specials = ',.!@#$%^&*';
    const options = [alpha, alpha, alpha, calpha, calpha, num, num, specials];
    let opt, choose;
    let password = "";
    for ( let i = 0; i < 8; i++ ) {
      opt = Math.floor(Math.random() * options.length);
      choose = Math.floor(Math.random() * (options[opt].length));
      password = password + options[opt][choose];
      options.splice(opt, 1);
    }
    document.getElementById("randomPassword").innerHTML = password
}

function isEvenOrOdd(){
    const number = parseInt(document.getElementById("number").value);

    if(!number || number==null || number==undefined){

        document.getElementById("evenOrOdd").innerHTML = `Enter a valid number please` 
    }else{
        if(number%2===0){
            document.getElementById("evenOrOdd").innerHTML = `The number ${number} is Even`
        }else{
            document.getElementById("evenOrOdd").innerHTML = `The number ${number} is Odd` 
        }
    }

}

function returnRandomColor(){
    let randomNum = Math.random()

    randomNum =Math.floor(randomNum*10) ;

    document.getElementById("color").innerHTML=colors[randomNum]
}

function returnsRandomObject(){
    let randomNum = Math.random()

    randomNum =Math.floor(randomNum*10) ;
    document.getElementById("object").innerHTML =`${names[randomNum].firstName} ${names[randomNum].lastName}` 
}