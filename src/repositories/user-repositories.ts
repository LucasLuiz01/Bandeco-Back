import prisma from "../database/index";

async function getUser(userId: number) {
    const user = await prisma.userCount.findFirst({
        where: {
            userId: userId
        }, include: {
            User: true
        }
    })
    return user;
}

async function getUserById(id:number){
    const user = await prisma.userCount.findFirst({
        where:{
            id: id
        }
    })
    return user
}

async function updateUserCount(balance: number, id: number) {
    await prisma.userCount.update({
        where: {
            id: id  // ID do usuário para o qual deseja atualizar o saldo
        },
        data: {
            balance:{
                increment: balance
            } // Novo valor do saldo que deseja atribuir
        }
    })
}
async function postUserCount(userId: number) {
    await prisma.userCount.create({
        data: {
            balance: 0,
            userId: userId
        }
    })
}


const userRepository = {
    getUser,
    postUserCount,
    updateUserCount,
    getUserById
};

export default userRepository;