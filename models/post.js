const mongoose = require("mongoose");

const multer = require("multer");
const path = require("path");
const AVATAR_PATH = path.join("/uploads/posts/avatars");

const postSchema = new mongoose.Schema(
  {
    details: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// static methods
postSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
  "avatar"
);
postSchema.statics.avatarPath = AVATAR_PATH;

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
