const Library = require('../models/library')

module.exports = {
    async list(req,res){
        try{
            const library = await Library.findAll()
            return res.json(library)
        } catch(err){
            return console.error("Erro na listagem: ", err)
        }
    },
    async show(req,res){
        try{
            const library = await Library.findAll({where: {id:req.params.id}})
            return res.json(library)
        } catch (err) {
            return console.error("Erro na busca: ", err)
        }
    },
    async create(req,res) {
        const {titulo, autor, ano, editora, isbn10, preco} = req.body
        try{
            const library = await Library.create({titulo, autor, ano, editora, isbn10, preco})
            return res.json(library)
        }catch(err){
            return console.error("Erro na criacao: ", err)
        }
    },
    async update(req, res) {
        const Sequelize = require('sequelize')
        const Op = Sequelize.Op
        const {titulo, autor, ano, editora, isbn10, preco} = req.body
        const id = req.params.id
        try{
            await Library.update({titulo, autor, ano, editora, isbn10, preco}, {where: {id: {[Op.eq]: id}}})
            return res.json({msg: `Livro ${titulo} atualizado com sucesso!`})
        } catch (err){
            return res.json({msg: `Livro ${titulo} nao foi atualizado!`}, err)
        }
    },
    async delete(req,res){
        try{
            await Library.destroy({where: {id: req.params.id}})
            return res.json({msg: `Exclusao de item de ID ${req.params.id} feita com sucesso!`})
        } catch (err) {
            return console.error("Erro na exclusao: ", err)
        }
    }
}