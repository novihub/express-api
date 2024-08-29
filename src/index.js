import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use('/api', router)

app.get('/posts', (req, res) => {
	res.status(200).json('server is working')
})

async function run() {
	try {
		await mongoose.connect(process.env.DB_URL)
		app.listen(PORT, () => {
			console.log(`connected successfully on ${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}

run()
