const WeDo = require("../models").HomeWeDo


const getAll = async (req, res) => {
    try {
        const weDo = await WeDo.findOne({where: {id: 1}})
        return res.json(weDo)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const edit = async (req, res) => {
    try {
        const {
            titleHy,
            titleRu,
            titleEn,
            textHy,
            textRu,
            textEn,
            image,
            titleOne,
            descriptionOne,
            titleTwo,
            descriptionTwo,
            titleThree,
            descriptionThree
        } = req.body
        const weDo = await WeDo.findOne({where: {id: 1}})
        weDo.titleHy = titleHy
        weDo.titleRu = titleRu
        weDo.titleEn = titleEn
        weDo.textHy = textHy
        weDo.textRu = textRu
        weDo.textEn = textEn
        weDo.image = image
        weDo.titleOne = titleOne
        weDo.descriptionOne = descriptionOne
        weDo.titleTwo = titleTwo
        weDo.descriptionTwo = descriptionTwo
        weDo.titleThree = titleThree
        weDo.descriptionThree = descriptionThree
        await weDo.save()
        return res.json(weDo)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

module.exports = {
    getAll,
    edit
}