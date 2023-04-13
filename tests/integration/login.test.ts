import app from "index";
import supertest from "supertest";
import prisma from "database";

const server = supertest(app)

beforeEach(async()=>{
    await prisma.userCount.deleteMany({});
    await prisma.user.deleteMany({});
})

describe("POST /sign-up", ()=>{

    it("shoul respond with status 422", async()=>{
        const response = await server.post("/sign-in").send({
            password: "dasdasdsad"
        })
    
        expect(response.status).toBe(422);
    })

    it("shoul respond with status 201", async()=>{
        const response = await server.post("/sign-in").send({
            ra: 123541,
            password: "dasdasdsad",
            name: "Pedro Afonso"
        })
    
      
        expect(response.status).toBe(200);
    })

})