import users from '../../models/model.user'
import { Request, Response, RequestHandler } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserData, SignInResponse } from './interfaces/interfaces.user'




export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const emailExists = await users.findOne({ email: email })

  if (emailExists) {
    return res.status(409).json({ error: "email already exists" })
  }

  try {
    const handledPassword = await bcrypt.hash(password, 10)
    const newUser = new users({
      email,
      password: handledPassword
    })
    await newUser.save()
    return res.status(200).json({ message: 'User created successfully.' })

  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' })

  }

  res.json("saved")

}





export const signin: RequestHandler = async (req, res: Response<SignInResponse>) => {
  const { email, password } = req.body
  console.log(email, password)
  const existUser = await users.findOne({ email: email })

  if (!existUser) {
    return res.status(201).json({
      message: "email or password do not match",
      token: '',
      data: {email:""}
    })
  }
  const match = await bcrypt.compare(password, existUser.password)
  if (match) {
    const token: string = jwt.sign({ _id: existUser._id }, 'aklass')
    return res.status(200).json({
      token: token,
      message: 'welcome',
      data: { email: existUser.email }
    })
  }


}


