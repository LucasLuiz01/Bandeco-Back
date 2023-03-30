import prisma from "../database/index.js";

async function getDate(date:string) {
    const data = await prisma.menu.findMany({
        where:{
            date: date
        }
    })
    return data
}

const dateRepository = {
    getDate
};

export default dateRepository;