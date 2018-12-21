module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_all().then(response => {
            res.status(200).send(response)
        }).catch(err=>console.log(err))
    },
    createPost:(req,res)=>{
        const db = req.app.get('db');
        let {id, name, address, city, state, zip, img, mortgage, rent} = req.body;
        db.create_post({id, name, address, city, state, zip, img, mortgage, rent})
            .then(response => {
                res.status(200).send(response)
            }).catch(err=>console.log(err))
    },
    deletePost:(req,res)=>{
        const db = req.app.get('db')
        let {id} = req.params;
        db.delete_post({id})
            .then(response => {
                res.status(200).send(response)
            }).catch(err=>console.log(err))
    }
}