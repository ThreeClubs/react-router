import { useParams } from "react-router-dom";

function Books() {
  const params = useParams();

  return (
    <div className="Books">
      <h1>Books</h1>
      <h3>You are about to access book: {params.bookID}</h3>
    </div>
  );
}

export default Books;
