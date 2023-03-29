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

    await prisma.dates.createMany({
        data: [{
            date: "Segunda-Feira"
        }, {
            date: "Terça-Feira"
        }, {
            date: "Quarta-Feira"
        }, {
            date: "Quinta-Feira"
        }, {
            date: "Sexta-Feira"
        },]
    })
    await prisma.type.createMany({
        data: [{
            typeFood: "Almoço"
        }, {
            typeFood: "Jantar"
        }, {
            typeFood: "café da manhã"
        }]
    })

    const diaDaSemana = await prisma.dates.findFirst({
        where: {
            date: "Segunda-Feira"
        }
    })
    const typeAlmoco = await prisma.type.findFirst({
        where: {
            typeFood: "Almoço"
        }
    })
    const typejantar = await prisma.type.findFirst({
        where: {
            typeFood: "Jantar"
        }
    })

    await prisma.menu.createMany({
        data: [{
            dateId: diaDaSemana.id,
            typeId: typeAlmoco.id,
            isVeg: false,
            protein: "Sobrecoxa à caçadora",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."

        }, {
            dateId: diaDaSemana.id,
            typeId: typeAlmoco.id,
            isVeg: true,
            protein: "PTS com mandioquinha",
            complement: "Virado de banana",
            salad: "Acelga",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."
        }, {
            dateId: diaDaSemana.id,
            typeId: typejantar.id,
            isVeg: false,
            protein: "Carne de panela com batata",
            complement: "Abobrinha Aromática",
            salad: "Chuchu com salsa",
            dessert: "Laranja",
            juice: "Uva",
            comments: "Contém glúten no pão. Pode conter ovo, leite e derivados no molho vinagrete Bom Sabor."
        }, {
            dateId: diaDaSemana.id,
            typeId: typeAlmoco.id,
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
