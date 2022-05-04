import axios from "axios";

export class PostsRepository {

    async getAllPosts() {
        return await (
            await axios.get('https://jsonplaceholder.typicode.com/posts')
        ).data;
    }

}