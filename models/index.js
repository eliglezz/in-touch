const User = require("./User");
const Post = require("./Post");
const Group = require("./Group");

User.hasMany(Post,{
    onDelete:"CASCADE"
});

Post.belongsTo(User);

User.belongsToMany(Group,{
    through:"UserGroup"
})

Group.hasMany(User,{
    through:"UserGroup"
})

module.exports={
    User,
    Post,
    Group
};