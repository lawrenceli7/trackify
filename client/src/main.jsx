import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Background from "./components/Background.jsx";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Background>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Background>
    </BrowserRouter>
  </StrictMode>
);
