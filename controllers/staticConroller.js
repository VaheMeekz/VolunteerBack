const Static = require("../models").Static
const path = require('path')
const fs = require('fs')

const upload = async (req, res, next) => {
    try {
        const {file} = req.files;
        const {name,nameHy,nameEn} = req.body
        const filePath = path.resolve(__dirname, '..', 'static')
        const fileName = name + '.pdf';
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, {recursive: true})
        }
        file.mv('./static/'+ fileName, async () => {
            try {
                const newStatic =  await Static.create({
                    fileName,
                    nameHy,
                    nameEn
                })
                return res.json(newStatic)
            } catch (e) {
                console.log("something went wrong",e)
            }
        })
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const getAll = async (req,res) => {
    try {
        const statics = await Static.findAll()
        return res.json(statics)
    }catch (e) {
        console.log("something went wrong",e)
    }
}

module.exports = {
    upload,
    getAll
}