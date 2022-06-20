const Statics = require("../models").Static
const del = async (id) => {
    try {
        await Statics.destroy({where: {id}})
        return;
    } catch (e) {
        console.log("something went wrong", e)
    }
}

module.exports = {
    del
}