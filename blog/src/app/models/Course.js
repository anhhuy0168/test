const mongoose =require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


mongoose.plugin(slug)
const Course = new Schema({
    name:{type:String, require:true },
    decription:{type:String  },
    image: {type:String },
    videoID:{type:String, maxlength:255 },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now},
    slug: { type: String, slug: "name",unique:true }//! unique la chi ton tai 1 du lieu dhuy nhat khong giong nhau
})
//! soft delete
Course.plugin(mongooseDelete,{
    deleteAt:true,//! thoi gian xoa
    overrideMethods:'all'}) //! override lai thuoc tinh xoa de khong xuat hien tren man hinh vi du nhu delete = true se khong xuat hien nua
module.exports = mongoose.model('Course',Course)