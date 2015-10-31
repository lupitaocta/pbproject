var ProtoBuf = require("protobufjs");

var builder = ProtoBuf.loadProtoFile("person.proto"),
    Game = builder.build("Game"),
    Person = Game.Persons.Person;

var person = new Person({
    "name": "Lupita",
    "id":"1",
    "email":"lupitaoctaviani@yahoo.com",
    
});

var buffer = person.encode();
console.log(buffer);

var dbuffer = Person.decode(buffer);
console.log(dbuffer);
