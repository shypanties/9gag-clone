const express = require("express");
const postController = require("./controller");
const isAuth = require("../../common/middleware/is-auth");
const router = express.Router();

/// Post API
router.get("/", postController.getPosts);
router.get("/:postId", postController.getPost);

router.post("/", isAuth, postController.createPost);

router.put("/:postId", isAuth, postController.updatePost);

router.delete("/:postId", isAuth, postController.deletePost);

// Vote API
router.get("/:postId/votes", isAuth, postController.updatePostVote);

/// Comment API
router.get("/:postId/comments", postController.getComments);

router.get("/:postId/comments/:commentId", postController.getComment);

router.post("/:postId/comments", isAuth, postController.addComment);

router.put(
  "/:postId/comments/:commentId",
  isAuth,
  postController.updateComment
);

router.delete(
  "/:postId/comments/:commentId",
  isAuth,
  postController.deleteComment
);

/// Subcomment API
router.get(
  "/:postId/comments/:commentId/subcomments",
  postController.getSubcomments
);

router.get(
  "/:postId/comments/:commentId/subcomments/:subcommentId",
  postController.getSubcomment
);

router.post(
  "/:postId/comments/:commentId/subcomments",
  isAuth,
  postController.addSubcomment
);

router.put(
  "/:postId/comments/:commentId/subcomments/:subcommentId",
  isAuth,
  postController.updateSubcomment
);

router.delete(
  "/:postId/comments/:commentId/subcomments/:subcommentId",
  isAuth,
  postController.deleteSubcomment
);

module.exports = router;
