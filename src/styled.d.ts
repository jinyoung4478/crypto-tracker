// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        boxColor: string;
        accentColor: string;
        shadowColor: string;
        btnColor: string,
        btnBgColor: string,
    }
}