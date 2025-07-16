const getGoals = (req, res) => {
    res.send('get goals');
};

const createGoal = (req, res) => {
    res.send('create goals')
}

const updateGoal = (req, res) => {
    res.send(`update goal ${req.params.id}` )
}

const deleteGoal = (req, res) => {
      res.send(`delete goal ${req.params.id}` )
}
module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};
