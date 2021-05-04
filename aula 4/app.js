var person = {
    firstName:'John',
    lastName:'Damon',
    gender:'Male',
    age:30,
};
var person_stringfy = JSON.stringify(person);
console.log(person_stringfy)
var person_json = '{"firstName":"John","lastName":"Damon","gender":"Male","age":30}';
var person_obj = JSON.parse(person_json);
console.log(person_obj)