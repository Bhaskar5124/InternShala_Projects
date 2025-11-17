import { createVideo, displayAllVideos, updateVideo } from "../controllers/videoController.js";


export function videoRoutes(app){
    app.get('/videodata', displayAllVideos);
    app.post('/videoupload', createVideo);
    app.put('/video/:id', updateVideo);
}