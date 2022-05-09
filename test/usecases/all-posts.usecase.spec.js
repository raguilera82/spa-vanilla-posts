import { PostsRepository } from "../../src/repositories/posts.repository"
import { AllPostsUseCase } from "../../src/usecases/all-posts.usecase"
import POSTS from './../../fixtures/posts.json';

jest.mock('../../src/repositories/posts.repository');

describe('All posts Use Case', () => {

    beforeEach(() => {
        PostsRepository.mockClear();
    })

    it('should execute correct', async () => {

        PostsRepository.mockImplementation(() => {
            return {
                getAllPosts: () => {
                    return POSTS;
                }
            }
        })

        const useCase = new AllPostsUseCase();
        const posts = await useCase.execute();

        expect(posts).toHaveLength(POSTS.length);

    })

})