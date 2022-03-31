import Router from "express";
import bcrypt from 'bcrypt';




const router = Router();


router.route("/register")
    .post((req, res) => {
        res.send(req.body)
    })

router.route("/login")
    .get((req, res) => {
        // req.body.password = bcrypt.hashSync(req.body.password, 2)
        // req.body.timestamp = new Date();
        
        res.send(req.body)
    })

router.route("/update")
    .put((req, res) => {
        res.send(req.body)
    })

router.route("/delete")
    .delete((req, res) => {
        res.send(req.body)
    })

export default router;