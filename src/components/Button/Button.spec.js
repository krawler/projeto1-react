const { render, screen, fireEvent } = require("@testing-library/react");
import { Button } from '.';

describe('<Button/>', () => {
        
    it('should render the button with text "Load more"', () => {
       render(<Button text="Load More" />);
       
       const button = screen.getByRole('button', {name: /load more/i});
       expect(button).toBeInTheDocument();
       expect(button).toHaveAttribute('class','button');
    });

    it('should be disabled when disable is true', () => {
        render(<Button text="Load More" disabled={true} />);
        
        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeDisabled();
     });

     it('should call a function on click', () => {
        const fn = jest.fn(); 
        render(<Button text="Load More" onclick={fn} />);
        
        const button = screen.getByRole('button', {name: /load more/i});
        fireEvent.click(button);        
        expect(fn).toHaveBeenCalledTimes(1);
     });
 
})