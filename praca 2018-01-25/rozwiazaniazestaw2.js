// rozwiazania zestaw 2:
// 1
db.stations.find({"name" : "Kawaihae"}).count()
// 2
db.stations.find(
    {
        "metadata.location.state" : "HI"
    }
)
// 3
db.stations.find(
    {},
    {
        "_id" : 0,
        "-name" : 1,
        "metadata.location.state" : 1
    }
).sort({"_id" : 1})
// 4
db.stations.find(
    {"metadata.date_established" : {$lt : "1960-01-01"}}
)
// 5
db.stations.find(
    {
        "parameter" : {
            $not : {
                $elemMatch : {
                    "-name" : "Air Temp"
                }
            }
        }
    }
)
// 6
db.stations.find(
    {
        $and : [
            {"parameter.-name" : "Air Temp"},
            {"parameter.-name" : "Water Temp"}
        ]
    }
)
// 7
db.stations.find(
    {
        "parameter" : {
            $exists : false
        }
    }
)
// 8
db.ocean_data.find(
    {
        "products" : {
            $elemMatch : {
                "name" : "air_temperature",
                "v" : {
                    $not : {
                        $type : "double"
                    }
                }
            }
        }
    }
)
// 9
db.ocean_data.find(
    {
        $and : [
            {
                "products" : {
                    $elemMatch : {
                        "name" : "air_temperature",
                        "v" : {$lt : 70, $gt : 60}
                    }
                }
            },
            {
                "products" : {
                    $elemMatch : {
                        "name" : "air_pressure",
                        "v" : {$gt : 1000}
                    }
                }
            }
        ]
    }
)

db.ocean_data.find()



/*db.ocean_data.find(
    {
        "products" : {
            $elemMatch : {
                        "name" : "air_temperature",
                        "v" : {$lt : 70, $gt : 60}
            }
        }
    }
)*/






    
db.stations.find()