import {RequestHandler} from 'express'
import Patients from '../../models/patient/model.patient'
import bcrypt from 'bcrypt'


export const signup:RequestHandler = async(req, res) => {
    //destructuro los datos recibidos del body
    const { rut,
        name,
        lastName,
        age,
        diseases,
        email,
        password,
        recomentations,
        schedule} = req.body

 //compruebo si existe       
const existPatient = await Patients.findOne({rut:rut});
if (existPatient){
    return res.status(409).json({ error: "rut already exists" })
    }
// Convertir el array "diseases" a una cadena de texto
const diseasesString = JSON.stringify(diseases);

// encryptamos todos los datros recibimos

const handledName = await bcrypt.hash(name, 10)
const handledLastName = await bcrypt.hash(lastName, 10)
const handleddiases = await bcrypt.hash(diseasesString, 10)
const handledEmail = await bcrypt.hash(email, 10)
const handledPassword = await bcrypt.hash(password, 10)
const handledRecomentations = await bcrypt.hash(recomentations, 10)
const  handledschedule = await bcrypt.hash(schedule, 10)

//creo nuevo "patient" co los datos encryptado
const newPatient = new Patients({
        rut: rut,
        name: handledName,
        lastName: handledLastName ,
        age: age,
        diseases:handleddiases,
        email: handledEmail ,
        password:handledPassword ,
        recomentations: handledRecomentations,
        schedule: handledschedule,
        createAt:Date.now()

})
// se guarada en la db
await newPatient.save()
return res.status(200).json({ message: 'Patient created successfully.' })



    
}