Execute =>

npm i
npm start

sudo docker run -p 4443:4443 --rm     -e OPENVIDU_RECORDING=true     -e OPENVIDU_RECORDING_PATH=/PATH/TO/VIDEO/FILES     -v /var/run/docker.sock:/var/run/docker.sock     -v /PATH/TO/VIDEO/FILES:/PATH/TO/VIDEO/FILES openvidu/openvidu-server-kms:2.14.0
