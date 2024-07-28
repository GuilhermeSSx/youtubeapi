import { Router } from "express";
import { login } from "../middleware/login";
import { UserRepository } from "../modules/user/repositories/UserRepository";

const userRoutes = Router();
const userRepository = new UserRepository();

// rotas
userRoutes.post('/sign-up', (request, response) => {
    userRepository.cadastrar(request, response);
})

userRoutes.post('/sign-in', (request, response) => {
    userRepository.login(request, response);
})

userRoutes.get('/get-user', login, (request, response) => {
    userRepository.getUser(request, response);
})

export { userRoutes };