const axios = require('axios');

exports.getAllUsers = async(req,res) => {
    try{
        const response = await axios.get('${}');
        res.json(response.data);
    }catch(error){
        res.status(error.response?.status||500).send(error.message);


    }
    
};

exports.getUserById = async (req, res) => {
    try {
        const response = await axios.get(`${USER_SERVICE_BASE_URL}/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).send(error.message);
    }
};
