class Comment {
  _id;
  name;
  email;
  movie;
  text;
  data;
  constructor(init) {
    Object.assign(this, init);
  }
}
export default Comment;
