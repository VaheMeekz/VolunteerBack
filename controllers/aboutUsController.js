const AboutUs = require('../models').AboutUs

const edit = async (req,res) => {
    try {
        const {titleHy,titleEn,descriptionHy,descriptionEn,image} = req.body
        const item = await AboutUs.findOne({where:{id:1}})
        item.titleHy = titleHy
        item.titleEn = titleEn
        item.descriptionHy = descriptionHy
        item.descriptionEn = descriptionEn
        item.image = image
        await item.save()
        return res.json(item)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const getAll = async (req,res) => {
    try {
        const about = await AboutUs.findOne({
            where:{id:1}
        })

        return res.json(about)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

module.exports = {
    edit,
    getAll
}