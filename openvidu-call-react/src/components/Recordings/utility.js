import axios from "axios";

const forceDownload = async (url, serverSecret, fileName) => {
    const res = await axios.get(url, {
        headers: {
            Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + serverSecret),
        },
        responseType: "blob"
    })
    const urlCreator = window.URL || window.webkitURL;
    const videoUrl = urlCreator.createObjectURL(res.data);
    const tag = document.createElement('a');
    tag.href = videoUrl;
    tag.download = fileName;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
};

export default forceDownload;