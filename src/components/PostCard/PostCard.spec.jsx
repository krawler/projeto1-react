import { render } from "@testing-library/react";
import { PostCard } from ".";

const mock = {
    title: 'title 1',
    body: '',
    id: 1,
    cover: 'img/img.png'
}

describe('<PostCard />', () => {

    it('should render Postcard with properties',()=> {
        const {debug} = render(<PostCard {...mock} />);
        debug();
    })

});