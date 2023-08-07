const { app } = require("./app")

const main = async () => {
    try {
        
        app.listen(4000)

        console.log('works ')

    } catch (error) {
        console.log(error)
    }
}

main()