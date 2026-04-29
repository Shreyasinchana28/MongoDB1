db.members.insertMany([
    {
        member_id: "M001",
        name: "Amit Sharma",
        membership_type: "Premium",
        join_date: new Date("2024-06-15"),
        workouts: ["Yoga", "Cardio", "Strength Training"],
        total_visits: 45,
        last_visit_date: new Date("2025-05-01"),
        monthly_fee: 2500
    },
    {
        member_id: "M002",
        name: "Priya Patel",
        membership_type: "Elite",
        join_date: new Date("2024-03-10"),
        workouts: ["Yoga", "Pilates", "Swimming"],
        total_visits: 80,
        last_visit_date: new Date("2025-05-03"),
        monthly_fee: 5000
    },
    {
        member_id: "M003",
        name: "Rahul Verma",
        membership_type: "Basic",
        join_date: new Date("2025-02-20"),
        workouts: ["Cardio"],
        total_visits: 1,
        last_visit_date: new Date("2025-02-21"),
        monthly_fee: 1000
    },
    {
        member_id: "M004",
        name: "Sneha Gupta",
        membership_type: "Premium",
        join_date: new Date("2024-11-05"),
        workouts: ["Zumba", "Yoga", "Cardio"],
        total_visits: 35,
        last_visit_date: new Date("2025-04-28"),
        monthly_fee: 2500
    },
    {
        member_id: "M005",
        name: "Karan Singh",
        membership_type: "Basic",
        join_date: new Date("2025-04-01"),
        workouts: ["Strength Training"],
        total_visits: 1,
        last_visit_date: new Date("2025-04-02"),
        monthly_fee: 1000
    }
])
db.members.find({
    membership_type: "Premium",
    total_visits: { $gt: 20 }
})
db.members.updateMany(
    { join_date: { $lt: new Date("2025-01-01") } },
    { $mul: { monthly_fee: 0.85 } }
)
db.members.deleteMany({
    membership_type: "Basic",
    total_visits: { $lt: 2 }
})
db.members.find({
    workouts: "Yoga"
})
Or using the explicit $in operator:

javascript


db.members.find({
    workouts: { $in: ["Yoga"] }
})
