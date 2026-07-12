function LoadMore({ loading, hasMore, onLoadMore }) {
  if (!hasMore) return null;
  return (
    <div className="text-center my-4">
      <button
        className="btn btn-outline-danger"
        onClick={onLoadMore}
        disabled={loading}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}

export default LoadMore;