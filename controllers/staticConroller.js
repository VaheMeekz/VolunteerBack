const Static = require("../models").Static
const path = require('path')
const fs = require('fs')
const upload = async (req, res, next) => {
    try {
        const {file} = req.files;
        const {name, nameHy, nameEn} = req.body
        console.log(name, nameHy, nameEn, "name, nameHy, nameEn")
        console.log(file, "+++++++++++++++++++++")
        const realName = name + '.pdf'
        const old = await Static.findOne({where: {fileName: realName}})
        if (!old) {
            const filePath = path.resolve(__dirname, '..', 'static')
            const fileName = name + '.pdf';
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            file.mv('./static/' + fileName, async () => {
                try {
                    await Static.create({
                        fileName,
                        nameHy,
                        nameEn
                    })
                    return res.redirect(process.env.CLIENT_URL)
                } catch (e) {
                    console.log("something went wrong", e)
                }
            })
        } else return res.json({message: "File with this name already exist"})
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const getAll = async (req, res) => {
    try {
        const statics = await Static.findAll()
        return res.json(statics)
    } catch (e) {
        console.log("something went wrong", e)
    }
}


module.exports = {
    upload,
    getAll,
}