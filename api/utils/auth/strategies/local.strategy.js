const {Strategy} = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UserServices = require('../../../components/users/service');
const service = new UserServices();

const LocalStrategy = new Strategy(
    {
        usernameField: 'username',
        passwordField:'password',
    },
    async(username,password,done)=>{
        try {
            const user= await service.getOneUsername(username);
            if(!user){
                done(boom.unauthorized(),false);
            };
            const isMatch = await bcrypt.compare(password,user.password);

            if(!isMatch){
                done(boom.unauthorized(),false);
            };
            done(null,user);
        } catch (error) {
            done(error,false);
        }
    }
);


module.exports = LocalStrategy;