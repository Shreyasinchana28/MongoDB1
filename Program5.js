db.enrollments.insertMany([
    {
        enrollment_id: "EN001",
        student_name: "Alice Brown",
        course_name: "Python Fundamentals",
        course_category: "Programming",
        enrollment_date: new Date("2025-01-10"),
        completion_date: new Date("2025-03-15"),
        progress_percentage: 100,
        quiz_scores: [85, 90, 78, 92],
        certificate_issued: false,
        fee_paid: 2999
    },
    {
        enrollment_id: "EN002",
        student_name: "Bob Williams",
        course_name: "UI/UX Basics",
        course_category: "Design",
        enrollment_date: new Date("2025-02-05"),
        completion_date: null,
        progress_percentage: 60,
        quiz_scores: [70, 75, 80],
        certificate_issued: false,
        fee_paid: 1999
    },
    {
        enrollment_id: "EN003",
        student_name: "Charlie Davis",
        course_name: "Digital Marketing 101",
        course_category: "Marketing",
        enrollment_date: new Date("2025-01-20"),
        completion_date: new Date("2025-04-01"),
        progress_percentage: 100,
        quiz_scores: [88, 92, 95, 90],
        certificate_issued: false,
        fee_paid: 2499
    },
    {
        enrollment_id: "EN004",
        student_name: "Diana Evans",
        course_name: "Machine Learning Intro",
        course_category: "Data Science",
        enrollment_date: new Date("2025-03-01"),
        completion_date: null,
        progress_percentage: 45,
        quiz_scores: [82, 78],
        certificate_issued: false,
        fee_paid: 4999
    },
    {
        enrollment_id: "EN005",
        student_name: "Ethan Foster",
        course_name: "Python Fundamentals",
        course_category: "Programming",
        enrollment_date: new Date("2025-02-15"),
        completion_date: null,
        progress_percentage: 80,
        quiz_scores: [90, 88, 92],
        certificate_issued: false,
        fee_paid: 2999
    }
])
db.enrollments.createIndex({
    course_category: 1,
    progress_percentage: -1
})
db.enrollments.aggregate([
    {
        $unwind: "$quiz_scores"
    },
    {
        $group: {
            _id: "$course_category",
            average_quiz_score: { $avg: "$quiz_scores" }
        }
    }
])
db.enrollments.updateMany(
    {
        progress_percentage: 100,
        certificate_issued: false
    },
    {
        $set: { certificate_issued: true }
    }
)
db.enrollments.aggregate([
    {
        $match: {}
    },
    {
        $group: {
            _id: "$course_name",
            enrollment_count: { $sum: 1 }
        }
    },
    {
        $sort: { enrollment_count: -1 }
    },
    {
        $limit: 2
    }
])
