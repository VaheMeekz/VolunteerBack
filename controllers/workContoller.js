const Work = require("../models").Works
const WorkPlus = require("../models").WorkPlus
const WorkGov = require("../models").WorkGoverment
const WorkWin = require("../models").WorkWin

const getAll = async (req,res) => {
    try {
        const news = await Work.findAll({
            include:[WorkGov,WorkPlus,WorkWin]
        });
        return res.json(news);
    }catch (e) {
        console.log("something went wrong",e);
    }
}

const getSingle = async (req,res) => {
    try{
        const {id} = req.query;
        const work = await Work.findOne({where:{id}});
        return res.json(work);
    }catch (e) {
        console.log("something went wrong",e);
    }
}

const create = async (req,res) => {
    try{
        const {titleHy,titleEn,descriptionHy,descriptionEn,month,day,plus,gov,win} = req.body;
        const newWork = await Work.create({
            titleHy,titleEn,descriptionHy,descriptionEn,month,day
        });
        plus.split(",").forEach(async i=>{
            await WorkPlus.create({
                workId:newWork.id,
                descriptionHy: i.descriptionHy,
                descriptionEn: i.descriptionEn
            })
        });
        gov.split(",").forEach(async i=>{
            await WorkGov.create({
                workId:newWork.id,
                descriptionHy: i.descriptionHy,
                descriptionEn: i.descriptionEn
            })
        });
        win.split(",").forEach(async i=>{
            await WorkWin.create({
                workId:newWork.id,
                descriptionHy: i.descriptionHy,
                descriptionEn: i.descriptionEn
            })
        });
        return res.json(newWork);
    }catch (e) {
        console.log("something went wrong",e);
    }
}


const deleteItem = async (req,res) => {
    try{
        const {id} = req.body;
        await Work.destroy({
            where:{id}
        });
        const govs = await WorkGov.findAll({where:{workId:id}});
        const wins = await WorkGov.findAll({where:{workId:id}});
        const plus = await WorkGov.findAll({where:{workId:id}});

        govs.forEach(async i=>{
            await WorkGov.destroy({where:{id:i.id}})
        });
        wins.forEach(async i=>{
            await WorkWin.destroy({where:{id:i.id}})
        });
        plus.forEach(async i=>{
            await WorkPlus.destroy({where:{id:i.id}})
        });
        return res.json({success:true});
    }catch(e){
        console.log("something went wrong",e);
    }
}
module.exports = {
    getAll,
    getSingle,
    create,
    deleteItem
}