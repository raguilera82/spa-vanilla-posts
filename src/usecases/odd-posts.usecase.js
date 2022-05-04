import { PostsRepository } from "../repositories/posts.repository";
import { UtilsService } from "../services/utils.services";

export class OddPostsUseCase {

    async execute() {
        const repository = new PostsRepository();
        const posts = await repository.getAllPosts();
        const oddPosts = posts.filter((post) => UtilsService.isOdd(post.id));
        return oddPosts;
    }

}