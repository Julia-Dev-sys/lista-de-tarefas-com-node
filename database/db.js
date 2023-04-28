const mongodb = require('mongoose');
mongodb.set("strictQuery", true);
const connectToDatabase = async () => {
    await mongodb.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        
    .then(() => console.log("Conexão realizada com sucesso!"))
    .catch((err) => console.log(err));
    
};

module.exports = connectToDatabase;