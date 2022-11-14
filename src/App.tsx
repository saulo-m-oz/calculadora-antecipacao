import {Container} from "./components/common/container";
import {FormComponent} from "./components/forms";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container className="h-screen p-3">
                <FormComponent/>
            </Container>
        </QueryClientProvider>
    );
}

export default App;
