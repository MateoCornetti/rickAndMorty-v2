import { createGlobalStyle } from 'styled-components'

import Schwifty from '../components/fuente/get_schwifty.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Schwifty';
        src: url(${Schwifty});
    };
`