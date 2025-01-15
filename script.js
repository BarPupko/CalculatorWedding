function calculateGift() {
    const relationship = document.getElementById("relationship").value;
    const area = document.getElementById("area").value;
    const workStatus = document.getElementById("work-status").value;
    const student = document.getElementById("student").value;
    const salary = parseFloat(document.getElementById("salary").value) || 0;

    let baseAmount = 250; // base amount

    // Adjust base amount based on relationship
    if (relationship === "family") baseAmount += 300;
    else if (relationship === "close-friend") baseAmount += 200;
    else if (relationship === "manager") baseAmount += 200;
    else if (relationship === "manager-assist") baseAmount += 200;

    // Adjust based on area
    if (area === "center") baseAmount += 100;
    else if (area === "south") baseAmount -= 50;

    // Adjust based on work status
    if (workStatus === "unemployed") baseAmount -= 50;
    else if (workStatus === "self-employed") baseAmount += 200;

    // Adjust for students
    if (student === "yes") baseAmount -= 50;

    if( place === "restaurant") baseAmount -= 50;
    // Adjust based on salary
    if (salary > 0 && salary <= 5000) {
        baseAmount += 50;
    } else if (salary > 5000 && salary <= 10000) {
        baseAmount += 100;
    } else if (salary > 10000) {
        baseAmount += 150;
    }

    const result = baseAmount > 0 ? baseAmount : 50; // Minimum gift amount is 50 NIS
    document.getElementById("result").innerText = ` ${result} ₪ `;

    // Secretly store submission
    const data = {
        relationship,
        area,
        workStatus,
        student,
        salary,
        result: `${result} ₪`
    };

    fetch("/store_data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).catch(console.error);
}