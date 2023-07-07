import { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import Youtube from "react-youtube";
import { SongType } from "../../App";

type SongIdParam = { id: string };
type ContextType = { songs: Array<SongType>}

const Player = () => {
    const { songs } = useOutletContext<ContextType>();
    const params = useParams<SongIdParam>();
    const navigate = useNavigate(); 
    const [title, setTitle] = useState<string>("");
    const [youtubeLink, setYoutubeLink] = useState<string>("");

    useEffect(() => {
        const id = params.id ? parseInt(params.id, 10) : 0;
        const song = songs.find(song => song.id === id);
        if(song) {
            setTitle(song?.title ? song.title : "");
            setYoutubeLink(song?.youtube_link ? song.youtube_link : "");
        } else {
            navigate("/songs");
        }
    }, []);

    return (
        <div className="modal">
            <div className="box">
                <div className="heading">
                    <Link className="menu" to="/songs">
                        <span className="float-start badge bg-secondary pointer">X</span>
                    </Link>
                    <span className="title">&nbsp;&nbsp;&nbsp;{title}</span>
                </div>
                <div className="player">
                    <div>
                        <Youtube videoId={youtubeLink} opts={{ width:"760", height:"380", playerVars: {autoplay:1}}} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Player;