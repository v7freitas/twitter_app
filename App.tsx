import { NavigationContainer } from "@react-navigation/native";
import Routes from "@/routes";
import { ThemeProvider } from "styled-components/native";
import theme from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
