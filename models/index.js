const User = require("./User");
const Post = require("./Post");
const Group = require("./Group");

User.hasMany(Post,{
    onDelete:"CASCADE"
});

Post.belongsTo(User);

Post.belongsTo(Group);

User.belongsToMany(Group,{
    through:"UserId"
})

Group.belongsToMany(User,{
    through:"UserId"
})

module.exports={
    User,
    Post,
    Group
};