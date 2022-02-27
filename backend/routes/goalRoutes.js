    const express = require("express");
    const router = express.Router();
    const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
    } = require("../controllers/goalController");

    // router.get('/', (req, res) =>{
    //     res.status(200).json({message: 'Get goals'})
    // })

    // router.post('/', (req, res) =>{
    //     res.status(200).json({message: 'Set goals'})
    // })

    // router.put('/:id', (req, res) =>{
    //     res.status(200).json({message: `Update goals ${req.params.id}`})
    // })

    // router.delete('/:id', (req, res) =>{
    //     res.status(200).json({message: `Delete goals ${req.params.id}`})
    // })

    // router.get("/", getGoals);
    // router.post("/", setGoal);
    // router.put("/:id", updateGoal);
    // router.delete("/:id", deleteGoal);

    router.route('/').get(getGoals).post(setGoal)

    router.route('/:id').put(updateGoal).delete(deleteGoal)

    

    module.exports = router;
