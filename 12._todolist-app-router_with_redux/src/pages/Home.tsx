import MyTime from "./MyTime";
import TimeActionCreator from "../redux/TimeActionCreator";
import { useSelector, useDispatch } from "react-redux";
import { RootStatesType } from "../redux/AppStore";

const Home = () => {
  const currentTime = useSelector((state: RootStatesType) => state.home.currentTime);
  const dispatch = useDispatch();

  const changeTime = () => {
    dispatch(TimeActionCreator.changeTime({ currentTime: new Date() }));
  };

  return (
    <div className="card card-body">
      <h2>Home</h2>
      <MyTime currentTime={currentTime} changeTime={changeTime} />
    </div>
  );
};

export default Home;
