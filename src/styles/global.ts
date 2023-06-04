import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-family: 'Raleway', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
