import { useNavigate } from "react-router";
import { MemberType } from "../App";

type Props = { members: Array<MemberType> };

const Members = (props: Props) => {
    const navigate = useNavigate();
    const goHome = () => {
        if(window.confirm('정말로 홈으로 이동할까요?')) {
            navigate('/home', { state: {from: '/members'}}); // member page에서 이동했다는 것을 알리기 위한 정보 저장 
        }
    }
  const imgstyle = { width: 90, height: 80 };
  const list = props.members.map((member) => {
    return (
      <div key={member.name} className="col-6 col-md-4 col-lg-3">
        <img
          src={member.photo}
          alt={member.name}
          className="img-thumbnail"
          style={imgstyle}
        />
        <br />
        <h6>{member.name}</h6>
        <br />
        <br />
      </div>
    );
  });

  return (
    <div>
      <h2 className="m-4">Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
      <button className="btn btn-secondary" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
};

export default Members;
