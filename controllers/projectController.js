const Project = require("../models").Projects


const create = async (req, res) => {
    try {
        const {
            titleOneHy,
            titleOneEn,
            descriptionOneHy,
            descriptionOneEn,
            image,
            titleTwoHy,
            titleTwoEn,
            descriptionTwoHy,
            descriptionTwoEn
        } = req.body
        const newProject = await Project({
            titleOneHy,
            titleOneEn,
            descriptionOneHy,
            descriptionOneEn,
            image,
            titleTwoHy,
            titleTwoEn,
            descriptionTwoHy,
            descriptionTwoEn
        })
        return res.json(newProject)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const getAll = async (req, res) => {
    try {
        const all = await Project.findAll()
        return res.json(all)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const getSingle = async (req, res) => {
    try {
        const {id} = req.query
        const item = await Project({
            where: {id}
        })
        return res.json(item)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const deleteItem = async (req, res) => {
    try {

    } catch (e) {
        console.log("something went wrong", e)
    }
}

const edit = async (req, res) => {
    try {

    } catch (e) {
        console.log("something went wrong", e)
    }
}


module.exports = {
    getAll, getSingle, edit, deleteItem, create
}