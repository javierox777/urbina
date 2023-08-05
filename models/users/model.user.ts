import {Schema, model} from 'mongoose'
import { user } from '../../controllers/interfaces/interface.user'

const schemaUser:Schema = new Schema({
    email:String,
    password:String
})

export default model<user>('users', schemaUser)