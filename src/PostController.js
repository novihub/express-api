import Post from './Post.js'

class PostController {
	async create(req, res) {
		try {
			const { author, title, content, picture } = req.body
			const post = await Post.create({ author, title, content, picture })
			res.status(200).json(post)
		} catch (e) {
			res.status(500).json(e)
			console.log(e)
		}
	}

	async getAll(req, res) {
		try {
			const posts = await Post.find()
			res.json(posts)
		} catch (e) {
			res.json(e)
		}
	}
	async getOne(req, res) {
		try {
			const { id } = req.params
			if (!id) {
				res.status(400).json({ message: 'id is required' })
			}
			const posts = await Post.findById(id)
			res.json(posts)
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async update(req, res) {
		try {
			const post = req.body
			const updatedPost = await Post.findByIdAndUpdate(req.params.id, post, {
				new: true
			})
			res.json(updatedPost)
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async delete(req, res) {
		try {
			const { id } = req.params
			if (!id) {
				res.status(400).json({ message: 'id is required' })
			}
			const post = await Post.findByIdAndDelete(id)
			res.json(post)
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

export default new PostController()
