import { ThemeProvider } from "styled-components";
import { StyledProviderProps } from "./types";
import { defaultTheme } from "@presentation/styles/theme";
import GlobalStyle from "@presentation/styles/global";
import { useViewportSize } from "@application/hooks/common/size";

export function StyledProvider(props: StyledProviderProps): JSX.Element {
  const { children } = props;
  const { viewportHeight } = useViewportSize();

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle viewportHeight={viewportHeight}/>
        {children}
    </ThemeProvider>
  )
}

