import mongoose from 'mongoose'
import consfig from './config'


try {
    (async ()=>{
        const db = await mongoose.connect("mongodb://127.0.0.1/urbina")
        console.log(db.connection.name, " is connected")
      })()
    
} catch (error) {
    console.log(error)
}

