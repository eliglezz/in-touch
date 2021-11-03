const sequelize = require("../config/connection");
const {User,Group,Post} = require("../models")

const seed = async ()=>{
    const userData = await User.bulkCreate([
        {
            username:"joe",
            password:"password",
            email:"joe@joe.joe"
        },
        {
            username:"louis",
            password:"password",
            email:"louis@joe.joe"
        },
        {
            username:"brett",
            password:"password",
            email:"brett@joe.joe"
        },
        {
            username:"michael",
            password:"password",
            email:"michael@joe.joe"
        },
    ],{
        individualHooks:true
    })
    const postData = await Post.bulkCreate([
        {
            picture: "http://placekitten.com/200/300",
            caption: 'look at this cool kitten',
            UserId:1
        },

    ])
    const groupsData = await Group.bulkCreate([
        {
            name:"Test Family",
            UserId: 1
        },
        
    ])
}

sequelize.sync({force:true}).then(()=>{
    seed();
})
