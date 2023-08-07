const { app } = require("./app")
const { sqlDB } = require("./database/database.js")

const main = async () => {
    try {
        
        await sqlDB.authenticate()
        await sqlDB.sync({force: true})
        app.listen(4000)

        console.log('works ')

    } catch (error) {
        console.log(error)
    }
}

main()