const User = require("./User");
const Post = require("./Post");
const Group = require("./Group");

User.hasMany(Post,{
    onDelete:"CASCADE"
});

Post.belongsTo(User);

User.belongsToMany(Group,{
    through:"UserId"
})

<<<<<<< HEAD
Group.hasMany(User,{
    through:"UserGroup"
=======
Group.hasMany(Post)

Group.belongsToMany(User,{
    through:"GroupId"
>>>>>>> dev
})

module.exports={
    User,
    Post,
    Group
};