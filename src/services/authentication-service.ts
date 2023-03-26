import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authenticationRepository from "../repositories/authentication-repositories.js";

export async function signInService(name: string,password:string, ra:string){
    const passwordHash = bcrypt.hashSync(password, 6);
    await authenticationRepository.postUser(name, passwordHash, ra);
    
}

export async function signUpService(password:string, ra:string){
    const verifyUser = await authenticationRepository.getUserRa(ra);
    if(!verifyUser){
        throw { message: "NotFound" }
    }
    const comparePassword = bcrypt.compareSync(password, verifyUser.password);
    if(!comparePassword){
      throw { message: "NotFound" }
    }
    const token = jwt.sign({id: verifyUser.id}, process.env.JWT_SECRET,{expiresIn: 86400})
    return token;
}