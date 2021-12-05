import "./App.css";
//  components
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import { Grid } from "@material-ui/core";
import Feed from "./components/feed/Feed";
import Rightbar from "./components/rightbar/Rightbar";
import AddButton from "./components/addButton/AddButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
      <AddButton />
    </div>
  );
};

export default App;
