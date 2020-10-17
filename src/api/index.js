import { request } from 'graphql-request';

const API_URL = 'https://api-eu-central-1.graphcms.com/v2/ckewufzipreh401z44gdveemi/master';

export const fetchPosts = async (setPosts) => {
    const { posts } = await request(
        API_URL,
        `
            {
                posts {
                    id
                    createdAt
                    title
                    richy {
                        html
                    }
                }
            }
        `
    );

    setPosts(posts);
};
