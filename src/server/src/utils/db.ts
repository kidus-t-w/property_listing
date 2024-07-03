import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/product_listing'
const deploymentUrl = 'mongodb+srv://kidusk:BXWF8llRLdzkwB5o@notdetuts.agr7oi9.mongodb.net/product_listing?retryWrites=true&w=majority&appName=notdetuts'
const devUrl = 'mongodb+srv://leuela:yZlP7sNjqmqDw3cC@cluster0.e9knves.mongodb.net/property_listing?retryWrites=true&w=majority&appName=Cluster0'


async function connect() {
    try {
        await mongoose.connect(deploymentUrl)
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