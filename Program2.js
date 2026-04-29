db.players.insertMany([
    {
        player_id: "PL001",
        name: "Virat Kohli",
        age: 36,
        role: "Batsman",
        matches_played: 275,
        runs_scored: 13500,
        wickets_taken: 4,
        nationality: "India"
    },
    {
        player_id: "PL002",
        name: "Ravindra Jadeja",
        age: 35,
        role: "All-rounder",
        matches_played: 200,
        runs_scored: 3200,
        wickets_taken: 250,
        nationality: "India"
    },
    {
        player_id: "PL003",
        name: "Jos Buttler",
        age: 34,
        role: "Wicketkeeper",
        matches_played: 180,
        runs_scored: 5500,
        wickets_taken: 0,
        nationality: "England"
    },
    {
        player_id: "PL004",
        name: "Pat Cummins",
        age: 31,
        role: "Bowler",
        matches_played: 150,
        runs_scored: 800,
        wickets_taken: 280,
        nationality: "Australia"
    },
    {
        player_id: "PL005",
        name: "Shakib Al Hasan",
        age: 37,
        role: "All-rounder",
        matches_played: 240,
        runs_scored: 7500,
        wickets_taken: 300,
        nationality: "Bangladesh"
    }
])

db.players.find({
    $and: [
        { runs_scored: { $gt: 2000 } },
        { wickets_taken: { $gt: 50 } }
    ]
})
db.players.updateMany(
    { nationality: "India" },
    { $inc: { runs_scored: 100 } }
)
db.players.deleteOne({
    $and: [
        { player_id: "PL006" },
        { matches_played: 0 }
    ]
})
Or more simply:
javascript
db.players.deleteOne({
    player_id: "PL006",
    matches_played: 0
})
db.players.find(
    {},
    {
        _id: 0,
        name: 1,
        role: 1,
        runs_scored: 1
    }
).sort({ runs_scored: -1 })
