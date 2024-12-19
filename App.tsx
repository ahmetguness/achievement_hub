import { Provider } from "react-redux";
import Navigation from "./src/navigation/Navigation";
import store from "./src/hooks/redux_toolkit/store";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <Navigation />
    </Provider>
  );
}
