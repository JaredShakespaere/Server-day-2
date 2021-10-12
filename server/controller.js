const houses = require('./db.json')
let globalId = 4
module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        const newHouse = {
        address,
        price,
        imageURL,
        id: globalId
    }
    houses.push(newHouse)
    console.log(houses)
    res.status(200).send(houses)
    globalId++
    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = houses.findIndex((elem) => +elem.id === +id)

        if( houses[index].price <= 10000 && type === 'minus'){
            res.status(400).send('cannot lower the price below $10000')
        } else if (houses[index].price > 10000 && type === 'minus'){
            houses[index].price-=10000
            res.status(200).send(houses)
        } else if (houses[index].price > 10000 && type === 'plus'){
            houses[index].price+= 10000
            res.status(200).send(houses)
        } else if (houses[index].price === 10000 && type === 'plus'){
            houses[index].price+= 10000
            res.status(200).send(houses)
        } else if(houses[index].price === 10000 && type === 'minus'){
            res.status(400).send(houses)
        }else {
            res.status(200).send("something went wrong")
        }  
    
 },
    deleteHouse: (req, res) => {
    const {id} = req.params
    let index = houses.findIndex((elem) => +elem.id === +id)
    houses.splice(index, 1)
    res.status(200).send(houses)
 }
};