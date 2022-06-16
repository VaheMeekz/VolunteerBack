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
            titleEn,
            textHy,
            textEn,
            image,
            titleOneHy,
            titleOneEn,
            descriptionOneHy,
            descriptionOneEn,
            titleTwoHy,
            titleTwoEn,
            descriptionTwoHy,
            descriptionTwoEn,
            titleThreeHy,
            titleThreeEn,
            descriptionThreeHy,
            descriptionThreeEn
        } = req.body
        const weDo = await WeDo.findOne({where: {id: 1}})
        weDo.titleHy = titleHy
        weDo.titleEn = titleEn
        weDo.textHy = textHy
        weDo.textEn = textEn
        weDo.image = image
        weDo.titleOneHy = titleOneHy
        weDo.titleOneEn = titleOneEn
        weDo.descriptionOneHy = descriptionOneHy
        weDo.descriptionOneEn = descriptionOneEn
        weDo.titleTwoHy = titleTwoHy
        weDo.titleTwoEn = titleTwoEn
        weDo.descriptionTwoHy = descriptionTwoHy
        weDo.descriptionTwoEn = descriptionTwoEn
        weDo.titleThreeHy = titleThreeHy
        weDo.titleThreeEn = titleThreeEn
        weDo.descriptionThreeHy = descriptionThreeHy
        weDo.descriptionThreeEn = descriptionThreeEn
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