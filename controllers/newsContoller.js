const News = require("../models").News

const getAll = async (req, res) => {
    try {
        const news = await News.findAll()
        return res.json(news)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const getSingle = async (req,res) => {
    try{
        const {id} = req.query
        const news = await News.findOne({
            where:{id}
        })
        return res.json(news)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

const create = async (req, res) => {
    try {
        const {
            image,
            titleHy,
            titleEn,
            descriptionHy,
            descriptionEn,
            subtitleHy,
            subtitleEn,
            subTextHy,
            subTextEn,
            secondSubTitleHy,
            secondSubTitleEn,
            secondSubTextHy,
            secondSubTextEn
        } = req.body
        const newNews = await News.create({
            image,
            titleHy,
            titleEn,
            descriptionHy,
            descriptionEn,
            subtitleHy,
            subtitleEn,
            subTextHy,
            subTextEn,
            secondSubTitleHy,
            secondSubTitleEn,
            secondSubTextHy,
            secondSubTextEn
        })
        return res.json(newNews)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const edit = async (req, res) => {
    try {
        const {
            id,
            image,
            titleHy,
            titleEn,
            descriptionHy,
            descriptionEn,
            subtitleHy,
            subtitleEn,
            subTextHy,
            subTextEn,
            secondSubTitleHy,
            secondSubTitleEn,
            secondSubTextHy,
            secondSubTextEn
        } = req.body
        const news = await News.findOne({
          where:{id}
        })
        news.image = image
        news.titleHy = titleHy
        news.titleEn = titleEn
        news.descriptionHy = descriptionHy
        news.descriptionEn = descriptionEn
        news.subtitleHy = subtitleHy
        news.subtitleEn = subtitleEn
        news.subTextHy = subTextHy
        news.subTextEn = subTextEn
        news.secondSubTitleHy = secondSubTitleHy
        news.secondSubTitleEn = secondSubTitleEn
        news.secondSubTextHy = secondSubTextHy
        news.secondSubTextEn = secondSubTextEn
        await news.save()
        return res.json(news)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const deleteItem = async (req,res) => {
    try {
        const {id} = req.body
        await News.destroy({
            where:{id}
        })
        return res.json({success:true})
    }catch (e) {
        console.log("something went wrong",e)
    }
}

module.exports = {
    getAll,
    getSingle,
    create,
    edit,
    deleteItem
}