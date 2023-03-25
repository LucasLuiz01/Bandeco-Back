import prisma from "../database/index.js";

async function getUserRa(ra:string) {
const userExist = await prisma.user.findFirst({
    where:{
        ra
    }
})
return userExist;
}

async function postUser(name:string,password:string,ra:string) {
    await prisma.user.create({
        data:{
            name,
            password,
            ra
        }
    })
}

const authenticationRepository = {
    getUserRa,
    postUser
};

export default authenticationRepository;