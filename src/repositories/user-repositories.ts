import prisma from "../database/index.js";

async function getUser(userId:number) {
const user = await prisma.userCount.findFirst({
    where:{
        userId: userId
    },include:{
        User: true
    }
})
return user;
}
async function postUserCount(userId:number) {
    await prisma.userCount.create({
        data:{
            balance: 0,
            userId: userId
        }
    })
    }


const userRepository = {
    getUser,
    postUserCount
};

export default userRepository;