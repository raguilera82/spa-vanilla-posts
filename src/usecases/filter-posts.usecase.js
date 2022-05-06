export class FilterPostsUseCase {

    execute(posts, searchText) {
        return posts.filter(post => post.title.includes(searchText));
    }

}