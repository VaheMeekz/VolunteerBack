const Event = require("../models").Event

const create = async (req,res) => {
    try {
        const {month,day,titleHy,titleEn,descriptionHy,descriptionEn} = req.body
        const newEvent = await Event.create({
            month,day,titleHy,titleEn,descriptionHy,descriptionEn
        })
        return res.json(newEvent)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

const getAll = async (req,res) => {
    try {
        const events = await Event.findAll({
            limit:2
        })
        return res.json(events)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

const getSingle = async (req,res) => {
    try {
        const {id} = req.query

        const event = await Event.findOne({
            where:{id}
        })
        return res.json(event)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

const deleteItem = async (req,res) => {
    try{
        const {id} = req.body
        await Event.destroy(
            {where:{id}})
        return res.json({succses:true})
    }catch (e) {
        console.log("something went wrong",e)
    }
}

const edit = async (req,res) => {
    try {
        const {id,month,day,titleHy,titleEn,descriptionHy,descriptionEn} = req.body
        const event = await Event.findOne({
            where:{id}
        })
        event.month = month
        event.day = day
        event.titleHy = titleHy
        event.titleEn = titleEn
        event.descriptionHy = descriptionHy
        event.descriptionEn = descriptionEn
        await event.save()
        return res.json(event)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

module.exports = {
    create,
    getAll,
    getSingle,
    deleteItem,
    edit
}

