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
        const project = await Project.create({
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
        return res.json(project)
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
        const {id} = req.body
        await Project.destroy({where:{id}})
        return res.json({success:true})
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const edit = async (req, res) => {
    try {
        const {id,titleOneHy,titleOneEn,descriptionOneHy,descriptionOneEn,image,titleTwoHy,titleTwoEn,descriptionTwoHy,descriptionTwoEn} = req.body
        const item = await Project.findOne({where:{id}})
        item.titleOneHy = titleOneHy
        item.titleOneEn = titleOneEn
        item.descriptionOneHy = descriptionOneHy
        item.descriptionOneEn = descriptionOneEn
        item.image = image
        item.titleTwoHy = titleTwoHy
        item.titleTwoEn = titleTwoEn
        item.descriptionTwoHy = descriptionTwoHy
        item.descriptionTwoEn = descriptionTwoEn
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log("something went wrong", e)
    }
}


module.exports = {
    getAll, getSingle, edit, deleteItem, create
}