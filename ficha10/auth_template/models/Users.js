module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            type: type.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        password: type.TEXT,
        email: type.STRING
    });
}