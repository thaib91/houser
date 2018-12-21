module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_all().then(response => {
            res.status(200).send(response)
        })
    },
    createPost:(req,res)=>{
        const db = req.app.get('db');
        let {id, name, address, city, state, zip, img, mortgage, rent} = req.body;
        db.create_post({id, name, address, city, state, zip, img, mortgage, rent})
            .then(response => {
                res.status(200).send(response)
            })
    }
}