let Friends = new Array("Dim","Dimon","Damon");
console.log(Friends);

let family = ["an","am","ab"];
console.log(family);
let family2 = [];
family2[0] = "kl";
family2[1] = "mn";
family2[2] = "lj";
family2[3] = "op";
console.log(family2.length);
if(family2.length > 3){
    alert("Welcom");
}

if(family2[2] == 'lj'){
    console.log("Welcom"+" "+ family2[2]);
}

let Name = "Mohammed DZ";
console.log(Name.length);
if (Name.length >= 11){
    console.log("Welcom -: "+" "+ Name);
}
//Array Methods
let asd = ["asdd","dddd","eeeee"];
console.log(typeof(asd));

asd = asd.toString();
document.write(asd);
console.log(typeof(asd));

let MyDate = new Date();
let MyDate1 = MyDate.toLocaleDateString();
document.writeln(MyDate);
console.log(MyDate);
console.log(MyDate1);