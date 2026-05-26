import mongoose from "mongoose";
import { connect } from "./db";
import { createUser, deleteUser } from "../services/users.service";
import { createProperty, deleteProperty } from "../services/property.service";
import { UserInput } from "../models/user.model";
import { PropertyInput } from "../models/property.model";
import UserModel from "../models/user.model";
import PropertyModel from "../models/property.model";

const usersData: UserInput[] = [
  {
    userName: "selamt",
    firstName: "Selam",
    lastName: "Tesfaye",
    email: "selam.tesfaye@example.com",
    phoneNumber: "+251911234567",
    password: "Password123!",
  },
  {
    userName: "birukalemu",
    firstName: "Biruk",
    lastName: "Alemu",
    email: "biruk.alemu@example.com",
    phoneNumber: "+251922345678",
    password: "Password123!",
  },
];

function buildProperties(
  user1Id: mongoose.Types.ObjectId,
  user2Id: mongoose.Types.ObjectId
): PropertyInput[] {
  return [
    {
      userId: user1Id,
      title: "Modern Downtown Apartment",
      description:
        "A sleek and fully furnished apartment in the heart of the city. Features floor-to-ceiling windows with stunning skyline views, high-end appliances, and access to rooftop amenities.",
      status: "for-rent",
      type: "Apartment",
      address: "14 Bole Road",
      country: "Ethiopia",
      city: "Addis Ababa",
      subCity: "Bole",
      furnished: true,
      bathrooms: 2,
      garages: 1,
      areaSize: 95,
      bedrooms: 2,
      floor: 8,
      price: 25000,
      image: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      ],
      yearBuild: 2020,
    },
    {
      userId: user1Id,
      title: "Spacious Family Villa",
      description:
        "A luxurious detached villa with a private garden, swimming pool, and ample parking. Perfect for families seeking comfort and privacy in an upscale neighbourhood.",
      status: "for-sale",
      type: "House",
      address: "22 CMC Road",
      country: "Ethiopia",
      city: "Addis Ababa",
      subCity: "Yeka",
      furnished: false,
      bathrooms: 4,
      garages: 2,
      areaSize: 420,
      bedrooms: 5,
      floor: 2,
      price: 8500000,
      image: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      ],
      yearBuild: 2018,
    },
    {
      userId: user1Id,
      title: "Cozy Studio Near University",
      description:
        "An affordable and well-maintained studio apartment close to Addis Ababa University. Ideal for students or young professionals. Includes a kitchenette and fast Wi-Fi.",
      status: "for-rent",
      type: "Land",
      address: "5 Sidist Kilo Avenue",
      country: "Ethiopia",
      city: "Addis Ababa",
      subCity: "Arada",
      furnished: true,
      bathrooms: 1,
      garages: 0,
      areaSize: 38,
      bedrooms: 1,
      floor: 3,
      price: 8500,
      image: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      ],
      yearBuild: 2015,
    },
    {
      userId: user2Id,
      title: "Commercial Office Space",
      description:
        "A prime commercial property in a busy business district. Open-plan layout suitable for a variety of business types. Includes a reception area, two conference rooms, and a server room.",
      status: "for-rent",
      type: "Apartment",
      address: "78 Churchill Avenue",
      country: "Ethiopia",
      city: "Addis Ababa",
      subCity: "Kirkos",
      furnished: false,
      bathrooms: 3,
      garages: 4,
      areaSize: 280,
      floor: 5,
      price: 65000,
      image: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      ],
      yearBuild: 2017,
    },
    {
      userId: user2Id,
      title: "Elegant Penthouse Suite",
      description:
        "An exclusive penthouse on the top floor of a premium high-rise. Features a private terrace, jacuzzi, smart home system, and panoramic 360-degree views of the city.",
      status: "for-sale",
      type: "House",
      address: "1 Meskel Square Tower",
      country: "Ethiopia",
      city: "Addis Ababa",
      subCity: "Lideta",
      furnished: true,
      bathrooms: 3,
      garages: 2,
      areaSize: 310,
      bedrooms: 3,
      floor: 22,
      price: 15000000,
      image: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        "https://images.unsplash.com/photo-1600607687939-ce8a6d1a9b28",
      ],
      yearBuild: 2022,
    },
  ];
}

// ─── Seed ─────────────────────────────────────────────────────────────────────

async function seed() {
  await connect();
  console.log("🌱 Starting database seed...\n");

  try {
    // ── 1. Clean up existing seed data ──────────────────────────────────────
    console.log("🗑️  Clearing existing seed data...");
    for (const u of usersData) {
      const existing = await UserModel.findOne({ email: u.email }).lean();
      if (existing) {
        await PropertyModel.deleteMany({ userId: existing._id });
        await deleteUser({ email: u.email });
        console.log(`  ✓ Removed user "${u.email}" and their properties`);
      }
    }

    // ── 2. Create users ──────────────────────────────────────────────────────
    console.log("\n👤 Creating users...");
    const createdUsers = [];

    for (const userData of usersData) {
      const result = await createUser(userData);

      if (result instanceof Error) {
        throw new Error(
          `Failed to create user "${userData.email}": ${result.message}`
        );
      }

      createdUsers.push(result);
      console.log(
        `  ✓ ${result.firstName} ${result.lastName} <${result.email}> (id: ${result._id})`
      );
    }

    const [user1, user2] = createdUsers;

    // ── 3. Create properties ─────────────────────────────────────────────────
    console.log("\n🏠 Creating properties...");
    const properties = buildProperties(
      user1._id as mongoose.Types.ObjectId,
      user2._id as mongoose.Types.ObjectId
    );

    for (const propertyData of properties) {
      const property = await createProperty(propertyData);
      console.log(
        `  ✓ [${property.type.toUpperCase()}] ${property.title} — ${property.status} @ ${property.price.toLocaleString()} ETB`
      );
    }

    console.log(
      `\n✅ Seed complete — ${createdUsers.length} users, ${properties.length} properties inserted.`
    );
  } catch (error) {
    console.error("\n❌ Seeding failed:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from database.");
  }
}

seed();