// avatar = [],
//   name,
//   _id,
//   groupChat = false,
//   sameSender,
//   isOnline,
//   newMessageAlert,
//   index = 0,
//   handleDeleteChatOpen,

export const sampleChats = [
  {
    avatar: [
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",
    ],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",
    ],
    name: "John Boi",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",

    name: "John Doe",
    _id: "1",
  },
  {
    avatar:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",

    name: "John Boi",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",
      name: "John Boi",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      // {
      //   public_id: "asdsad",
      //   url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      // },
    ],
    content: "Sample Message 1",
    _id: "sfnsdjkfsdnfkjsbnd",
    sender: {
      _id: "user._id",
      name: "Jake ",
    },
    chat: "chatId",
    createdAt: "2024-10-05T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asdsad 2",
        url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      },
    ],
    content: "",
    // content: "Sample Message 2",
    _id: "sfnsdjkfsdnfksdfjsbnd",
    sender: {
      _id: "sdfsdfsdf",
      name: "Chaman 2",
    },
    chat: "chatId",
    createdAt: "2024-10-05T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 2,
    },
    {
      name: "John Boi",
      avatar:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",
      _id: "2",
      username: "john_boi",
      friends: 10,
      groups: 1,
    },
  ],

  chats: [
    {
      name: "Random Group",
      avatar: ["https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"],
      _id: "1",
      groupChat: false,
      members: [
        {_id: "1", avatar: "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"}, 
        {_id: "2", avatar: "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"}, 
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar:
          "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",
      },
    },
    {
      name: "Random1 Group",
      avatar: ["https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"],
      _id: "2",
      groupChat: true,
      members: [
        {_id: "1", avatar: "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"}, 
        {_id: "2", avatar: "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"}, 
      ],
      totalMembers: 2,
      totalMessages: 10,
      creator: {
        name: "John Boi",
        avatar:
          "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",
      },
    },
  ],

  messages: [
    {
     attachments: [],
      content: "Sample Message 1",
      _id: "sfnsdjkfsdnfkjsbnd",
      sender: {
        avatar: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
        name: "Jake ",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-10-05T10:41:30.630Z",
    },
    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
        },
      ],
      // content: "",
      content: "Sample Message 2",
      _id: "sfnsdjkfsdnfksdfjsbnd",
      sender: {
        avatar: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
        name: "Chaman 2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-10-05T10:41:30.630Z",
    },
  ]
};
