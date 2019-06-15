const Post = require('../models/Post');

module.exports = {
    async store(req, res) {
        const post = await Post.findById(req.params.id);

        post.likes ++;

        await post.save();

        req.io.emit('like', post); // emite uma mensagem aos usuários conectados
        
        return res.json(post);
    }
};