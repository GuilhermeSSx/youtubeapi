"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRoutes = void 0;
const express_1 = require("express");
const VideosRepository_1 = require("../modules/videos/repositories/VideosRepository");
const login_1 = require("../middleware/login");
const videosRoutes = (0, express_1.Router)();
exports.videosRoutes = videosRoutes;
const videoRepository = new VideosRepository_1.VideoRepository();
// rotas
videosRoutes.post('/create-video', login_1.login, (request, response) => {
    videoRepository.createVideo(request, response);
});
videosRoutes.get('/get-videos/:user_id', login_1.login, (request, response) => {
    videoRepository.getVideos(request, response);
});
videosRoutes.get('/search', (request, response) => {
    videoRepository.searchVideos(request, response);
});
