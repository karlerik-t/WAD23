import { createStore } from 'vuex'

export default createStore({
  state: {
    
      Posts: [
        {
          id:1,
          uploadedFile: null,
          fileType: null,
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "I can't to find the WAD projects's instructions, can anybody help me?",
          date: "Nov 5, 2023",
    
        },
        {
          id:2,
          uploadedFile: null,
          fileType: null,
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "The training 'How to stand out attending a job interview?' will take place on November 7th from 14:15-15:45 in web-seminar form. Additional information and registration here.",
          date: "Nov 1, 2023"
        },
        {
          id:3,
          uploadedFile: "tartu.jpeg",
          fileType: "img",
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "Tartu in fall",
          date: "Oct 30, 2023"
        },
        {
          id:4,
          uploadedFile: null,
          fileType: null,
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "Hello, looking for volunteers to help with the Marketing Club event. More info: www.marketingclub.com",
          date: "Oct 27, 2023"
        },
        {
          id:5,
          uploadedFile: "Deltabuilding.jpeg",
          fileType: "img",
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "Delta",
          date: "Oct 23, 2023"
        },
        {
          id:6,
          uploadedFile: null,
          fileType: null,
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "Hello! We have found many lost things from yesterday's event. They can be found at the administrator's desk",
          date: "Oct 17, 2023"
        },
        {
          id:7,
          uploadedFile: null,
          fileType: null,
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "Hi! Looking for a teammate for the WAD project.",
          date: "Oct 11, 2023"
        },
        {
          id:8,
          uploadedFile: "tartu2024.jpg",
          fileType: "img",
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "Tartu 2023",
          date: "Oct 8, 2023"
        },
        {
          id:9,
          uploadedFile: null,
          fileType: null,
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "Anyone knows in which room the lab is in today?",
          date: "Oct 5, 2023"
        },
        {
          id:10,
          uploadedFile: null,
          fileType: null,
          authorName: "Anon",
          authorAvatar: "avatar.jpg",
          content: "Welcome!",
          date: "Oct 2, 2023"
        }
      ]
    
  },
  getters: {
    getPosts: state => {
      return state.Posts
  }
  },
  mutations: {
    incrementLikes(state, postID) {
      const post = state.Posts.find((p) => p.id === postID);
    if (post) {
      post.likes = (post.likes || 0) + 1;
  }
},
resetLikes(state) {
  // Reset likes to 0 for all posts
  state.Posts.forEach((post) => {
    post.likes = 0;
  });
},
  },
  actions: {
    incrementLikes({ commit }, postID) {
      commit('incrementLikes', postID);
    },
},
  modules: {
  }
})
