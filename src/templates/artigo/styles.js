import styled, { CSS } from 'styled-components';

export const Wrapper = styled.div`
    ${(props) => CSS`
        background: ${props.background};
    `}
`;