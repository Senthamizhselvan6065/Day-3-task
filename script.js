
//Question .1:

let color = [
    {
        "name" : "Yamaha",
        "color" : "Red"
    },
    {
        "name" : "Honda",
        "color" : "Black"
    },
    {
        "name" : "Hero",
        "color" : "Blue"
    },
    {
        "name" : "Tvs",
        "color" : "Red"
    }
];

//For loop
for(let i=0; i<color.length; i++){
    console.log(color[i].name,color[i].color);
}

//For in
for(let i in color){
    console.log(color[i].name,color[i].color);
}

//For of
for(let use of color){
    console.log(use.name,use.color);
}

//FoeEach
color.forEach(function(use){
       console.log(use.name,use.color)
});


//Question .2:
let resume = {
    "Name" : "Tamizh",
    "Age" : "21",
    "Gender" : "Male",
    "Date Of Birth" : "26/07/2000",
    "Qualification" : ["10th", "12th", "degeree"],
    "Location": "thiruvannamalai",
    "Experience" : "10years of experinence in xxx company",
    "Languages_known" : ["tamil", "english"],
    "Skills": ["java", "paython", "javascript"],
}
console.log(resume);

