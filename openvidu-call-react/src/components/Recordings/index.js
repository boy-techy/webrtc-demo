import React, {useEffect, useState} from "react";
import axios from "axios";
import Recording from "./Recording";
import forceDownload from "./utility";

const Recordings = ({serverUrl, serverSecret}) => {
    const [recordings, setList] = useState([]);
    const [playVideoUrl, setSelected] = useState("");
    useEffect( () => {
        const fetchList = async () => {
            const res = await axios.get(serverUrl + '/api/recordings', {
                headers: {
                    Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + serverSecret),
                    'Content-Type': 'application/json',
                },
            })
            setList(res.data?.items);
        }
        fetchList();
    }, [serverUrl, serverSecret]);


    return (
        <div>
            <div>
                <h3>Recordings</h3>
                <ul>
                    {recordings.map(r =>
                        <Recording recording={r}
                                   playVideoHandler={() => setSelected(r.url)}
                                   downloadHandler={() => {
                                       forceDownload(r.url, serverSecret, r.createdAt)
                                   }}/>)
                    }
                </ul>
            </div>
            <video src={playVideoUrl} width="320" height="240" controls autoPlay={true}/>
        </div>
)
}

export default Recordings;