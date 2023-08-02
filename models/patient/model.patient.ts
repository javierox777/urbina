import { Schema, model } from "mongoose";
import {Patient} from './interfaces/patient'


const patientSchema = new Schema({
    rut:String,
    name:String,
    lastName:String,
    age:Number,
    diseases:[],
    email:String,
    password:String,
    postoperatorio:String,
      
})

export default model<Patient>("patient", patientSchema)