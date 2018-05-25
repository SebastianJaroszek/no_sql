//zadania zestaw 1:
// 1
db.createCollection("animals")
// 2
db.animals.insertMany([
    {"type" : "dog"},
    {"type" : "cat"},
    {"type" : "penguin"},
    {"type" : "fox"},
    {"type" : "whale"},
    {"type" : "ostrich"}
])
// 3
db.animals.count()
// 4
db.animals.insert({"type" : "monkey"})
// 5
db.animals.update(
    {"type" : "monkey"},
    {
        $set: {"type" : "donkey"},
        $set: {"age" : 3}
    }
)
// 6
db.createCollection("plants")
// 7
db.plants.insertMany([
    {"type" : "rose"},
    {"type" : "sunflower"}
])
// 8
db.createCollection("colours")
// 9
db.colours.insertMany([
    {"type" : "red"},
    {"type" : "yellow"}
])
// 10
db.plants.renameCollection("flowers")
// 11
db.animals.remove({"type" : "fox"})
// 12
db.flowers.drop()
// ---------- pomocnicze
db.animals.find()
db.colours.find()