const db = require('../models');

const TestData = db.testData;

const create = async (req, res) => {
    let testData = {
        title: req.body.title,
        description: req.body.description,
        numeric: req.body.numeric,
        dtime: req.body.dtime
    };
  
    const dataResult = await TestData.create(testData).catch((err) => console.log(err));
    res.status(201).send(dataResult);
};

const retrieve = async (req, res) => {
    let dtLst = await TestData.findAll({}).catch((err) => console.log(err));
    res.status(200).send(dtLst);
};
  
const detail = async (req, res) => {
    let id = req.params.id;
    let data = await TestData.findOne({ where: { id: id } }).catch((err) =>
        console.log(err)
    );
    res.status(200).send(data);
};

const update = async (req, res) => {
    let id = req.params.id;
    const testData = await TestData.update(req.body, { where: { id: id } }).catch((err) =>
        console.log(err)
    );
    res.status(200).send(testData);
};

const remove = async (req, res) => {
    let id = req.params.id;
    await TestData.destroy({ where: { id: id } }).catch((err) => console.log(err));
    res.status(200).send(`테스트 데이터 ID : ${id} 값이 삭제 되었습니다.`);
};

module.exports = {
    create,
    retrieve,
    detail,
    update,
    remove,
};