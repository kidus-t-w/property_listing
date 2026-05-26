import mongoose from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL; // TODO: Add dotenv package


// TODO: CHANGE THIS TO A CLASS!!!

async function connect() {
    try {
        await mongoose.connect(DATABASE_URL as string)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

function isAlive() {
    const status = mongoose.connection.readyState;
    if (status === 1) {
        return true
    } else {
        return false
    }
}

export {connect, isAlive}