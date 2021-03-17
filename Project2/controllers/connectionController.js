const model = require('../models/connection');
// let event = model.find();
//     let events = model.groupBy(event,'Type');
//     console.log(events)

exports.index = (req,res)=>{
    let events = model.find();
    res.render('./index');
};

exports.connections = (req,res)=>{
    let event = model.find();
    let events = model.groupBy(event,'Type');
    console.log(events)
    res.render('./connection/connections', {events});
};

exports.new = (req,res)=>{
    res.render('./connection/newconnection');
};



exports.create =  (req,res)=>{
    let event = req.body;
    model.save(event);
    console.log(model.find())
    res.redirect('/connections');

};


exports.show = (req,res,next)=>{
    let id = req.params.id;
    let event = model.findById(id);
    
    
    if(event){
        res.render('./connection/connection', {event});
    }else{
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);

    }        
         
};

exports.update = (req,res,next)=>{
    let event=req.body;
    let id = req.params.id;
    if (model.updateById(id,event)){
        res.redirect('/connections/'+id);
    }else{
        let err = new Error('Cannot find a event with id ' + id);
        err.status=404;
        next(err);
    }
};


exports.edit = (req,res,next)=>{
    let id = req.params.id;
    let event = model.findById(id);

    if(event){
        res.render('./connection/updateconnection', {event});
    }else
    {
        let err = new Error('Cannot find a event with id ' + id);
        err.status=404;
        next(err);

    }
};


exports.delete = (req,res,next)=>{
    let id = req.params.id;
    if(model.deleteById(id))      
        res.redirect('/connections');
    else
    {
        let err = new Error('Cannot find a event with id ' + id);
        err.status=404;
        next(err);
    }
};