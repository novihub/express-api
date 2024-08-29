import PostService from './PostService.js'

class PostController {
	async create(req, res) {
		try {
			const post = await PostService.create(req.body)
			res.status(200).json(post)
		} catch (e) {
			res.status(500).json(e)
			console.log(e)
		}
	}

	async getAll(req, res) {
		try {
			const posts = await PostService.getAll()
			return res.json(posts)
		} catch (e) {
			res.json(e)
		}
	}
	async getOne(req, res) {
		try {
			const posts = await PostService.getOne(req.params.id)
			return res.json(posts)
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async update(req, res) {
		try {
			const updatedPost = await PostService.update(req.params.id, req.body, {
				new: true
			})
			res.json(updatedPost)
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async delete(req, res) {
		try {
			const deletedPost = await PostService.delete(req.params.id)
			return res.json(deletedPost)
		} catch (e) {
			return res.status(500).json(e)
		}
	}
}

export default new PostController()
