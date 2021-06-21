const Sequelize = require("sequelize");
const PersonModel = require('./models/person');

const sequelize = new Sequelize('ficha10', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Person = PersonModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tables created!");
        Person.bulkCreate([
            {firstname: "David", lastname: "Jardim", profession: "IT", age: 99},
            {firstname: "Maria", lastname: "Lopes", profession: "Chef", age: 19},
            {firstname: "Pedro", lastname: "Mata", profession: "Piloto", age: 39},
            {firstname: "Vicente", lastname: "Ventura", profession: "Gamer", age: 33},
            {firstname: "Dante", lastname: "Silva", profession: "Artista", age: 45},
        ])
            .then(() => {
                return Person.findAll();
            })
            .then((persons) => {
                console.log(persons);
            });
    })

module.exports = {
    Person
}