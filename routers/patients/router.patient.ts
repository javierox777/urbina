import {Router} from 'express'
import * as ctrlsPatient from '../../controllers/patient/controller.patient'
const router = Router()

router.post("/create", ctrlsPatient.signup)



export default router