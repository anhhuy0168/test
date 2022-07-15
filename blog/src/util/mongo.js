

module.exports={
    mutipleMongooseToObject:function(mongooses){
        return mongooses.map(mongoose =>mongoose.toObject())
    },
    mongooseToObject:function(momgoose){
            return momgoose ?momgoose.toObject():momgoose
    }
}