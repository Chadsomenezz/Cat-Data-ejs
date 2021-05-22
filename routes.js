const catType = {
    persian:'persian',
    ragdoll:'ragdoll'
}

module.exports = (req,res)=>{
    if (req.url === '/'){
        res.render('cat',{catType})
    }
    else if(req.url === '/ragdoll'){
        res.render('details',{cat:catType.ragdoll,likes:['ragdollfood1','ragdollfood2']})
    }
    else if(req.url === '/persian'){
        res.render('details',{cat:catType.persian,likes:['persianfood1','persianfood2']})
    }

}