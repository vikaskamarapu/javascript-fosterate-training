//object declaration 
let user1=new Object();
let user2={};

//object initialization
user1={
    name:"vikas",
    age:19
}

user2["name"]="prerna";
user2["job"]="doctor";

//printing the objects
for(let key in user1)
{
    console.log(key+" : "+user1[key]);
}

for(let key in user2)
{
    console.log(key+" : "+user2[key]);
}

