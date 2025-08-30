import { useAuth } from "./contexts/Auth";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import UnAuthenticatedApp from "./pages/UnAuthenticatedApp";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    // <div>{isAuthenticated ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</div>
    <div>{<UnAuthenticatedApp />}</div>
  );
}

export default App;
