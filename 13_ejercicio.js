let users = {
    "admin": { password: "admin123", role: "admin" },
    "user1": { password: "user123", role: "user" },
    "user2": { password: "pass456", role: "user" }
};

let attempts = {};
let maxAttempts = 3;

while (true) {
    let username = prompt("Enter your username:");

    if (!username) {
        alert("Login cancelled.");
        break;
    }

    let password = prompt("Enter your password:");

    if (!attempts[username]) {
        attempts[username] = 0;
    }

    // Check if user exists
    if (users[username]) {
        let isAdmin = users[username].role === "admin";
        let allowedAttempts = isAdmin ? maxAttempts + 1 : maxAttempts;

        if (attempts[username] >= allowedAttempts) {
            alert("Access blocked. Too many failed attempts.");
            break;
        }

        if (password === users[username].password) {
            alert("Access granted. Welcome, " + username + "!");
            break;
        } else {
            attempts[username]++;
            alert(`Incorrect password. Attempt ${attempts[username]} of ${allowedAttempts}.`);
        }
    } else {
        alert("User not found.");
    }
}

