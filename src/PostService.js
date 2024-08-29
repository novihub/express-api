import Post from './PostModel.js'

class PostService {
	async create(post) {
		const createdPost = await Post.create(post)
		return createdPost
	}

	async getAll() {
		const posts = await Post.find()
		return posts
	}
	async getOne(id) {
		if (!id) {
			throw new Error('Id is required')
		}
		const posts = await Post.findById(id)
		return posts
	}

	async update(...args) {
		const updatedPost = await Post.findByIdAndUpdate(...args)
		return updatedPost
	}
	async delete(id) {
		if (!id) {
			throw new Error('id is required')
		}
		const post = await Post.findByIdAndDelete(id)
		return post
	}
}

export default new PostService()
