const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost/my_database,', {useNewUrlParser: true});

/*
BlogPost.create({
    title: 'Blog về sách Lập trình',
    body: 'Ở cái xã hội này, chỉ có làm thì mới có ăn, những cái loại không nàm mà đòi có ăn thì ...'
}), (error, blogPost) => {
    console.log(error, blogPost);
}

BlogPost.create({
    title: 'NodeJS',
    body: 'Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web'
}) 
*/

BlogPost.find({
    // title: 'NodeJS'
}, (error, blogpost) => {
    console.log(error, blogpost);
})

// BlogPost.findByIdAndUpdate("60c84cf26d44cb11a0b9098a", {
//     title: 'Update NodeJS'
// }, (error, blogpost) => {
//     console.log(error, blogpost);
// })


