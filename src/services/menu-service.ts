import dateRepository from "../repositories/menu-repositories.js";

export async function dateService(date:string){
    const datas = await dateRepository.getDate(date);
    if(datas.length === 0){
        throw { message: "NotFound" }
    }
    return datas
}
