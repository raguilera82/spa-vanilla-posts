import { FilterPostsUseCase } from "../../instrumented/usecases/filter-posts.usecase"
import POSTS from './../../fixtures/posts.json';

describe('Filter posts Use Case', () => {

    it('Filter with text', () => {

        const posts = POSTS;

        const useCase = new FilterPostsUseCase();
        const filteredPosts = useCase.execute(posts, 'fugit');

        expect(filteredPosts).toHaveLength(4);

    })

    it('Filter 0 elements with text no present', () => {

        const posts = POSTS;

        const useCase = new FilterPostsUseCase();
        const filteredPosts = useCase.execute(posts, 'fugit2222');

        expect(filteredPosts).toHaveLength(0);

    })


})