import axios from "axios";

export class PostsRepository {

    async getAllPosts() {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }

}