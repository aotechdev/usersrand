const router = require("express").Router();
const User = require("./Model");

router.post("/new-user", async(req, res) => {
    const newUser = await User.create(req.body)
    res.send(newUser)
})

router.get("/users", async(req, res) => {
    const users = await User.find()
    res.send(users)
})

router.get("/user/:id", async(req, res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
})

router.put("/user/:id", async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)
    res.send(user)
})

router.delete("/user/:id", async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    res.send(user)
})

module.exports = router;