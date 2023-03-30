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
            date: "Segunda-Feira",
            isDinner: false,
            isVeg: false,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            date: "Segunda-Feira",
            isDinner: false,
            isVeg: true,
            protein: "PTS com mandioquinha",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."
        }, {
             date: "Segunda-Feira",
             isDinner: true,
            isVeg: false,
            protein: "Carne de panela com batata",
            complement: "Abobrinha Aromática",
            salad: "Chuchu com salsa",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."
        }, {
             date: "Segunda-Feira",
             isDinner: true,
            isVeg: true,
            protein: "Escondidinho Vegano (purê de batata, pts, cenoura, chuchu)",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uvo",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."
        }]
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
