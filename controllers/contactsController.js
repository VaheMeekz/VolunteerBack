const Contact = require("../models").Contacts
const edit = async (req, res) => {
    try {
        const {location, phone, email, facebook, linkedin} = req.body
        const item = await Contact.findOne({
            where: {id: 1}
        })
        item.location = location
        item.phone = phone
        item.email = email
        item.facebook = facebook
        item.linkedin = linkedin
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const getAll = async (req,res) => {
    try{
        const items = await Contact.findAll()
        return res.json(items)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

module.exports = {
    edit,
    getAll
}