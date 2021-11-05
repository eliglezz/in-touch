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

Group.hasMany(Post)

Group.belongsToMany(User,{
    through:"GroupId"
})

module.exports={
    User,
    Post,
    Group
};