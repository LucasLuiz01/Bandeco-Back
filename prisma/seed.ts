import prisma from "../src/database/index.js"

async function main() {
    await prisma.user.createMany({
        data: [{
            name: "Fabio",
            password: "12345",
            ra: "123422"
        }, {
            name: "lucas",
            password: "12345",
            ra: "22225"
        }, {
            name: "Marcelo",
            password: "12345",
            ra: "123991"
        }, {
            name: "Rodrigo",
            password: "12345",
            ra: "129952"
        },
        ]
    })



    await prisma.menu.createMany({
        data: [{
            date: "04/03/2023",
            dateWeek: "Segunda",
            isDinner: false,
            isVeg: false,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "04/03/2023",
            dateWeek: "Segunda",
            isDinner: false,
            isVeg: true,
            protein: "PTS com mandioquinha",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."
        }, {
            date: "04/03/2023",
            dateWeek: "Segunda",
            isDinner: true,
            isVeg: false,
            protein: "Carne de panela com batata",
            complement: "Abobrinha Aromática",
            salad: "Chuchu com salsa",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."
        }, {
            date: "04/03/2023",
            dateWeek: "Segunda",
            isDinner: true,
            isVeg: true,
            protein: "Escondidinho Vegano (purê de batata, pts, cenoura, chuchu)",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uvo",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."
        }, {
            date: "05/03/2023",
            dateWeek: "Terça",
            isDinner: false,
            isVeg: false,
            protein: "Sobrecoxa ao molho de tomate",
            complement: "Cenoura refogada",
            salad: "Pepino",
            dessert: "Laranja",
            juice: "Maçã",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "05/03/2023",
            dateWeek: "Terça",
            isDinner: false,
            isVeg: true,
            protein: "Soja em grão xadrez",
            complement: "Cenoura refogada",
            salad: "Pepino",
            dessert: "Laranja",
            juice: "Maçã",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."


        }, {
            date: "05/03/2023",
            dateWeek: "Terça",
            isDinner: true,
            isVeg: false,
            protein: "Isca de frango à pizzaiolo",
            complement: "Cenoura refogada",
            salad: "Pepino",
            dessert: "Laranja",
            juice: "Maçã",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."


        }, {
            date: "05/03/2023",
            dateWeek: "Terça",
            isDinner: true,
            isVeg: true,
            protein: "Feijão fradinho com vinagrete",
            complement: "Cenoura refogada",
            salad: "Pepino",
            dessert: "Laranja",
            juice: "Maçã",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."


        }, {
            date: "06/03/2023",
            dateWeek: "Quarta",
            isDinner: false,
            isVeg: false,
            protein: "Bisteca ao molho de limão",
            complement: "Couve refogada",
            salad: "Almeirão",
            dessert: "Laranja",
            juice: "Manga",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "06/03/2023",
            dateWeek: "Quarta",
            isDinner: false,
            isVeg: true,
            protein: "Ervilha partida com berinjela",
            complement: "Couve refogada",
            salad: "Almeirão",
            dessert: "Laranja",
            juice: "Manga",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "06/03/2023",
            dateWeek: "Quarta",
            isDinner: true,
            isVeg: false,
            protein: "Bife acebolado",
            complement: "Couve refogada",
            salad: "Almeirão",
            dessert: "Laranja",
            juice: "Manga",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."
        }, {
            date: "06/03/2023",
            dateWeek: "Quarta",
            isDinner: true,
            isVeg: true,
            protein: "Escondidinho vegano (pts, milho e escarola)",
            complement: "Couve refogada",
            salad: "Almeirão",
            dessert: "Laranja",
            juice: "Manga",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "07/03/2023",
            dateWeek: "Quinta",
            isDinner: false,
            isVeg: false,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "07/03/2023",
            dateWeek: "Quinta",
            isDinner: false,
            isVeg: true,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "07/03/2023",
            dateWeek: "Quinta",
            isDinner: true,
            isVeg: false,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "07/03/2023",
            dateWeek: "Quinta",
            isDinner: true,
            isVeg: true,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "08/03/2023",
            dateWeek: "Sexta",
            isDinner: false,
            isVeg: false,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "08/03/2023",
            dateWeek: "Sexta",
            isDinner: false,
            isVeg: true,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "08/03/2023",
            dateWeek: "Sexta",
            isDinner: true,
            isVeg: false,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "08/03/2023",
            dateWeek: "Sexta",
            isDinner: true,
            isVeg: true,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        },]
    })


    const user1 = await prisma.user.findFirst({
        where: {
            name: "lucas"
        }
    })
    await prisma.userCount.create({
        data: {
            userId: user1.id,
            balance: 3000
        }
    })
}

main().then(() => {
    console.log("Registros feitos!")
}).catch((e) => {
    console.error("Deu muito ruim", e);
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})
