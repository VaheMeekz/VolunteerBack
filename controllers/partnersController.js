const Partners = require("../models").Partners

const create = async (req, res) => {
    try {
        const {namee, image} = req.body
        const newItem = await Partners.create({
            namee, image
        })
        return res.json(newItem)
    } catch (e) {
        console.log("something went wrong")
    }
}

const edit = async (req, res) => {
    try {
        const {id, name, image} = req.body
        const item = await Partners.findOne({where: {id}})
        item.namee = name
        item.image = image
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log("something went wrong")
    }
}

const deleteItem = async (req, res) => {
    try {
        const {id} = req.body

        await Partners.destroy({
            where: {id}
        })
        return res.json({success: true})
    } catch (e) {
        console.log("something went wrong")
    }
}

const getAll = async (req, res) => {
    try {
        const items = await Partners.findAll()
        return res.json(items)
    } catch (e) {
        console.log("something went wrong")
    }
}

module.exports = {
    getAll,
    create,
    deleteItem,
    edit
}