function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter marks for subject " + (i + 1)));
        total += x;
    }

    let average = total / n;
    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 75) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    let result = (average >= 40) ? "Pass" : "Fail";

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br/>" +
        "Average Marks: " + average + "<br/>" +
        "Grade: " + grade + "<br/>" +
        "Result: " + result;
}