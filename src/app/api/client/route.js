import connectDb from "@/lib/mongodb";
import Client from "@/app/models/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        console.log("🔗 Connecting to MongoDB...");
        await connectDb();
        console.log("✅ MongoDB Connected Successfully!");

        const { name, address, phone, email, password, country, termsAccepted } = await request.json();

        // Validate required fields
        if (!name || !address || !phone || !email || !password || !country || !termsAccepted) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Validate phone number (10-15 digits)
        if (!/^\d{10,15}$/.test(phone)) {
            return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
        }

        // Validate email format
        const normalizedEmail = email.toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        // Validate password strength
        if (password.length < 6) {
            return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
        }

        // Check if email already exists
        const existingClient = await Client.findOne({ email: normalizedEmail });
        if (existingClient) {
            return NextResponse.json({ error: "Email already registered" }, { status: 409 });
        }

        // Check if phone number already exists
        const existingPhone = await Client.findOne({ phone });
        if (existingPhone) {
            return NextResponse.json({ error: "Phone number already registered" }, { status: 409 });
        }

        console.log("🔐 Hashing password...");
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new client
        const newClient = new Client({
            name,
            address,
            phone,
            email: normalizedEmail,
            password: hashedPassword,
            country,
            termsAccepted,
        });

        await newClient.save();
        console.log("✅ Client registered successfully!");

        return NextResponse.json({ message: "Client registered successfully" }, { status: 201 });
    } catch (error) {
        console.error("❌ Error registering client:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
