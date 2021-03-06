const About = require("../models").HomeAbout

const getAll =async (req,res) => {
    try {
        const about =await About.findOne({where:{id:1}})
        return res.json(about)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

const edit = async (req,res) => {
    try{
        const {titleHy,titleEn,textHy,textEn,image} = req.body
        const about =await About.findOne({where:{id:1}})
        about.titleHy = titleHy
        about.titleEn = titleEn
        about.textHy = textHy
        about.textEn = textEn
        about.image = image
        await about.save()
        return res.json(about)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

module.exports = {
    getAll,
    edit
}