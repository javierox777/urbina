import {Schema, model} from 'mongoose'


const schemaSchedule = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'patients' },
})



export default model('schedule', schemaSchedule)
