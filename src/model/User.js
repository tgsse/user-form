export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.createdOn = new Date(Date.now()).toLocaleDateString()
    }
    name
    age
    createdOn
}