import userRepository from "../repositories/user-repositories.js";

export async function userCountService(userId:number){
    const user = await userRepository.getUser(userId);
    delete user.User.password
    delete user.User.id
    delete user.id
    return user;
}