import { PostsRepository } from "../repositories/posts.repository";

export class AllPostsUseCase {

    async execute() {
        const repository = new PostsRepository();
        const posts = await repository.getAllPosts();
        return posts;
    }


}