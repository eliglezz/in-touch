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
        {
            picture: "http://placekitten.com/200/300",
            caption: 'look at this cool kitten',
            UserId:2
        },

    ])
    const groupsData = await Group.bulkCreate([
        {
            name:"Test Family",
            UserId: 1
        },
        {
            name:"Another Test Family",
            UserId: 2
        },
        
    ])
    groupsData[0].addUser(1)
    groupsData[0].addUser(2)
    userData[2].addGroups([0,1])
}

sequelize.sync({force:true}).then(()=>{
    seed();
})
