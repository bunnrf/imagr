const PostApiUtil = {
  fetchAllPosts: function(callback){
    $.ajax({
      url: "api/posts",
      success: function(resp){
        callback(resp)
      }
    })
  },

  fetchSinglePost: function(id, callback){
    $.ajax({
      url: "api/posts/" + id,
      success: function(resp){
        callback(resp)
      }
    })
  },

  createPost: function(post, callback){
    $.ajax({
      url: "api/posts",
      data: { post: post },
      success: function(resp){
        callback(resp)
      }
    })
  }
};

module.exports = PostApiUtil;
