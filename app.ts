import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routerUser from './routers/users/router.user'
import routerPatient from './routers/patients/router.patient'
export const app = express()

//config

app.set("PORT_WEB", process.env.PORT || 3000)


//middleware

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


//routes
app.use('/api/patient', routerPatient )
app.use('/api/user', routerUser )







