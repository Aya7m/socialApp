import { dbconnection } from "../../database/dbconnection.js"

let conn = dbconnection()
const addPost = (req, res) => {
    conn.query('insert into posts set ?', req.body)
    res.status(201).json({ message: 'success' })

}

const Allposts = (req, res) => {
    conn.execute(`select users.id as userId,users.name,posts.title,posts.discription,posts.id as postId from users join posts on users.id=posts.user_id`, (err, data) => {
        res.status(200).json({ message: 'success', Allposts: data })
    })

}

const singlePost = (req, res) => {
    conn.execute(`select users.id as userId,users.name,posts.title,posts.discription,posts.id as postId from users join posts on users.id=posts.user_id where posts.id=${req.params.id}`, (err, data) => {
        res.status(200).json({ message: 'success', post: data })
    })

}

const userPosts = (req, res) => {
    conn.execute(`select users.id as userId,users.name,posts.title,posts.discription,posts.id as postId from users join posts on users.id=posts.user_id where users.id=${req.params.id}`, (err, data) => {
        res.status(200).json({ message: 'success', posts: data })
    })

}

const updatePost = (req, res) => {
    conn.query(`update posts set ? where id=?`, [req.body, req.params.id])
    res.status(200).json({ message: 'success' })

}

const deletuser = (req, res) => {
    conn.execute(`delete from posts where id=${req.params.id}`)
    res.status(200).json({ message: 'success' })

}
export {
    addPost,
    Allposts,
    singlePost,
    userPosts,
    updatePost,
    deletuser
}