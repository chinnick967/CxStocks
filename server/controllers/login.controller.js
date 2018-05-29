import Login from '../models/login';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

import bcrypt from 'bcrypt-nodejs';
const saltRounds = 10;

// Takes username & password
export function signIn(req, res) {
  Login.findOne({username: req.body.user.username}).exec((err, matchedUser) => {
    bcrypt.compare(matchedUser.password, req.body.user.password, null, function(err, res) {
      if (res) {
        // sign in
        req.session.username = req.body.user.username;
      } else {
        res.status(400).send(err);
      }
    });
  });
}

export function createAccount(req, res) {
  const newUser = new Login(req.body.user);

  // sanitize
  newUser.username = sanitizeHtml(newUser.username);

  bcrypt.hash(newUser.password, saltRounds, null, function(err, hash) {
    newUser.save((err, saved) => {
      if (err) {
        console.log("failed to save");
        res.json({ user: "oh no"});
        //res.status(500).send(err);
      } else {
        req.session.username = req.body.user.username;
        res.json({ user: saved });
      }
    });
  });
}

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
