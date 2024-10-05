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
    createdAt: "2024-10-05T10:41:30.630Z"
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
    createdAt: "2024-10-05T10:41:30.630Z"
  },
];
