import { createTheme, MantineProvider, rem } from "@mantine/core";
import '../globals.css'
const theme = createTheme({
  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h2: { fontSize: rem(28) },
    },
  },
});

export const MantineThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
