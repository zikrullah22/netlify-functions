register.js
exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" }),
        };
    }

    const { username, email, phone, password } = JSON.parse(event.body);

    // Basic validation
    if (!username || !email || !phone || !password) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "All fields are required" }),
        };
    }

    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Invalid email format" }),
        };
    }

    if (!/^\\+?\\d{10,15}$/.test(phone)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Invalid phone number" }),
        };
    }

    try {
        // Simulate saving to a database
        console.log("User registered:", { username, email, phone, password });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Registration successful!" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Server error. Please try again." }),
        };
    }
};
