const mongodb = require('mongoose');
mongodb.set("strictQuery", true);
const connectToDatabase = async () => {
    await mongodb.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aula-node-exemplo-clust.ieh47uh.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
        if(error){
            return console.log('erro ao conectar com o banco: ' , error)
        }
        return console.log('Conexão realizada com sucesso!');
    }
    );
  

}

module.exports = connectToDatabase;