import { render, waitForElementToBeRemoved } from "@testing-library/react"
import Home from "../artigo"
import { rest } from "msw"
import { setupServer } from "msw/node"

const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/posts', async (req,res,ctx) => {
        return res(ctx.json([
            {
                userId: 1,
                id: 1,
                title: 'title1',
                body: 'Body context blog1',
            },
            {
                userId: 2,
                id: 2,
                title: 'title2',
                body: 'Body context blog2',
            },
            {
                userId: 3,
                id: 3,
                title: 'title3',
                body: 'Body context blog3',
            },
        ]));
    })
];

const server = setupServer(...handlers);

describe('<Home />', ()=>{
   
    beforeAll(() => {
        server.listen()
    });

    it('should render search, posts and load more', async () => {
        render(<Home />)
        const noMorePosts = screen.getByText('Não existem posts!')

        await waitForElementToBeRemoved(noMorePosts);
        screen.debug();
    });

    afterAll(() => {
        server.close
    });
 
});
