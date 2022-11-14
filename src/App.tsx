import {Container} from "./components/common/container";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Home} from "./components/home";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container className="h-screen p-3">
                <Home/>
            </Container>
        </QueryClientProvider>
    );
}

export default App;
