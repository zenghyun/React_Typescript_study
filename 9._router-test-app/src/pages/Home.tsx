import { useLocation } from 'react-router';

type LocationStateType = {
    from: string;
};

const Home = () => {
    const location = useLocation();
    const state = location.state as LocationStateType;
    const from = state ? state.from : "";

    return (
        <div className='card card-body'>
            <h2>Home</h2>
            {from !== "" ? <h4>state.from: {from}</h4> : ""}
        </div>
    );
};

export default Home;