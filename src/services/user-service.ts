import userRepository from "../repositories/user-repositories.js";

export async function userCountService(userId:number){
    const user = await userRepository.getUser(userId);
    delete user.User.password
    return user;
}

export async function userUpdateService(balance:number,id:number, userId:number){
    const user = await userRepository.getUserById(id);
    if(!user){
        throw { message: "NotFound" }
    }
    const userTwo = await userRepository.getUser(userId);
    if(userTwo.id !== user.id){
        throw { message: "NotFound" }
    }
    await userRepository.updateUserCount( balance, id)
}