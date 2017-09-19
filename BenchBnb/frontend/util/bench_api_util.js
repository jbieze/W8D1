export const fetchBenches = () => {
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    error: (err) => console.log(err)
  });
};

export const fetchBench = id => (
  $.ajax({
    method: 'GET',
    url: `api/benches/${id}`
  })
);

export const createReview = data => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  })
);

export const createBench = data => (
  $.ajax({
    method: 'POST',
    url: 'api/benches',
    data
  })
);
