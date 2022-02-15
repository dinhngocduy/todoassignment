import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import EditPost from "./components/EditPost";
import Registration from "./components/Registration";
import useToken from "./components/useToken";
import CategoryNav from "./components/CategoryNav";
import LowPriority from "./components/LowPriority";
import MidPriority from "./components/MidPriority";
import HighPriority from "./components/HighPriority";
import { Route, Switch } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";
import ChangePassword from "./components/ChangePassword";
import ChangeDetails from "./components/ChangeDetails";

import { loginApi } from "features/auth/auth";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    // return <Login setToken={setToken} />;
    return <Registration setToken={setToken} />;
  }

  console.log(loginApi);

  return (
    <div className="App">
      <Header />
      <DataProvider>
        <Nav />
        <CategoryNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lowPrio" component={LowPriority} />
          <Route exact path="/midPrio" component={MidPriority} />
          <Route exact path="/highPrio" component={HighPriority} />
          <Route exact path="/changePassword" component={ChangePassword} />
          <Route exact path="/changeDetails" component={ChangeDetails} />

          <Route exact path="/post" component={NewPost} />
          <Route exact path="/edit/:id" component={EditPost} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/about" component={About} />
          <Route exact path="/reactblog" component={Home} />

          <Route path="*" component={Missing} />
        </Switch>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
