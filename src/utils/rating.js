export function getRatingColor(rating) {
  if (rating >= 4) {
    return "bg-success";
  } else if (rating >= 3) {
    return "bg-warning";
  } else {
    return "bg-danger";
  }
}