const Banner = require("../models").HomeBanner

const create = async (req, res) => {
    try {
        const {titleHy, titleRu, titleEn, video} = req.body
        const newSlide = await Banner.create({
            titleHy, titleRu, titleEn, video
        })
        return res.json(newSlide)
    } catch (e) {
        console.log('something went wrong', e)
    }
}


const edit = async (req,res) => {
    try {
        const {id,titleHy,  titleEn, video} = req.body

        const slide = await Banner.findOne({
            where:{id}
        })
        slide.titleHy = titleHy
        slide.titleEn = titleEn
        slide.video = video
        await slide.save()
        return res.json(slide)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

const deleteSlide = async (req,res) => {
    try {
        const {id} = req.body

        await Banner.destroy({
            where: {id}
        })
        return res.json({success: true})
    }catch (e) {
        console.log("something went wrong",e)
    }
}

const getAll = async (req,res) => {
    try {
        const slides = await Banner.findAll()
        return res.json(slides)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

module.exports = {
    create,
    edit,
    deleteSlide,
    getAll
}