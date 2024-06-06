import { dbconnection } from "../../database/dbconnection.js"
import bycrpt from 'bcrypt'

let conn = dbconnection()
const signup = (req, res) => {

    conn.query(`insert into users set ? `, req.body)
    res.status(201).json({ message: 'success' })
}

const signin = (req, res) => {


    conn.execute(`select id,email,password from users where email='${req.body.email}'`, (err, data) => {
        if (data?.length != 0) {
            let match = bycrpt.compareSync(req.body.password, data[0].password)
            if (match) {
                res.json({ message: 'loin....token', userId: data[0].id })
            } else {
                res.status(409).json({ message: 'incorrect password' })
            }

        } else {
            res.status(401).json({ message: 'account not found' })
        }




    })
}
export {
    signup,
    signin
}