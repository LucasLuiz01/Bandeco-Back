import prisma from "../src/database";

async function main() {
    await prisma.user.createMany({
        data: [{
            name: "Fabio",
            password: "12345",
            ra: "123456"
        }, {
            name: "lucas",
            password: "12345",
            ra: "123450"
        }, {
            name: "Marcelo",
            password: "12345",
            ra: "123451"
        }, {
            name: "Rodrigo",
            password: "12345",
            ra: "123452"
        },
        ]
    })

    await prisma.dates.createMany({
        data: [{
            date: "12/03/2023"
        }, {
            date: "13/03/2023"
        }, {
            date: "14/03/2023"
        }]
    })

    await prisma.type.createMany({
        data: [{
            typeFood: "almoco"
        }, {
            typeFood: "jantar"
        }, {
            typeFood: "café da manhã"
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
