import { ThemeProvider } from 'styled-components';
import { StyledProviderProps } from './types';
import { defaultTheme } from '@styles/theme';

export function StyledProvider(props: StyledProviderProps): JSX.Element {
    const { children } = props;
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                {children}
            </ThemeProvider>
        </>
    )
}