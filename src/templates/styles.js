import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    background: red;

    ${(props) => css`
        background: ${props.background};
    `}
`;