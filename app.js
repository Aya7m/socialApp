import express from 'express'

import userRouter from './modules/users/users.routers.js'
import postRouter from './modules/posts/posts.routers.js'
import cors from 'cors'
const app = express()

const port = process.env.PORT|| 3000

app.use(cors())
app.use(express.json())

app.use('/auth',userRouter)
app.use('/posts',postRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))