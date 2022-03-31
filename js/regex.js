//searching a word 
let text = "Alluri Sitha Rama Raju";
let n = text.search("Rama");
console.log(n)

//replacing words
let a = "Hello World";
let result = a.replace("World", "Vikas");
console.log(result)

//return list of matched words
let str = "match function in regex expresion";
let result_exp2 = str.match(/ion/g);
console.log(result_exp2)

//return list of digits if matched with digits
let d = "This is 2020"; 
let res = d.match(/\d/g);
console.log(res)

// returns true or false
const pattern = /e/;
let x=pattern.test("regex in javascript");
console.log(x)

//exec : this function will return an array for match (or) null for no match
const p = /e/;
let y=p.exec("The best things in life are free!");
console.log(y)

let s="Hai this is javascript!"
let reg=/is/;
let r=reg.exec(s)
if(r){
    console.log(r)
    console.log(r.index)
    console.log(r.input)

}

//regular expresion
function validate(n) {
    let reg = /^[6-9]\d{9}$/;//\d allows only digits and ^ at starting doesn't allow any other chars other than [6-9] and $ say about end of string and curly braces say repetation of pattern
    if (reg.test(n)) {
        return("Number is valid!..");
    }
    else {
        return("Number is Invalid!..");
    }
}
let num = "7075500056";
console.log(num,validate(num));
num = "5075500056";
console.log(num,validate(num));
num = "7075500056345";
console.log(num,validate(num));