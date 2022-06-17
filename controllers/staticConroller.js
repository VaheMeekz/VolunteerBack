const path = require('path')
const fs = require('fs')

const upload = async (req, res, next) => {
    try {
        const {name, file} = req.body;
        console.log(file, "name")
        const filePath = path.resolve(__dirname, '..', 'static')
        const fileName = String(name) + '.jpg';
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, {recursive: true})
        }
        const tmp = await fs.writeFileSync(
            path.join(filePath, fileName),
            file.buffer,
        );
        return res.json(tmp)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

module.exports = {
    upload
}