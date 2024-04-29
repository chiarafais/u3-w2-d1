import AddComment from "./AddComment";
import CommentList from "./CommentList";

function CommentArea(props) {
  return (
    <>
      <CommentList idSingleBook={props.idSingleBook} />
      <AddComment idSingleBook={props.idSingleBook} />
    </>
  );
}
export default CommentArea;
