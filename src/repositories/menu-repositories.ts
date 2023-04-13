import prisma from "../database/index";

async function getDate(date:string) {
    const data = await prisma.menu.findMany({
        where:{
            dateWeek: date
        }
    })
    return data
}

const dateRepository = {
    getDate
};

export default dateRepository;