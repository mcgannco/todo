export const fetchAllLists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/lists',
  })
);

export const fetchSingleList = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/lists/${id}`,
  })
);

export const createList = (list) => (
  $.ajax({
    method: 'POST',
    url: '/api/lists',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: list
  })
);

export const deleteList = (id) => {
  return $.ajax({
      method: 'delete',
      url: `/api/lists/${id}`
  });
};
