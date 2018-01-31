const queryGraphQL = query => {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(json => json.data);
};

const getRooms = () => queryGraphQL('{ rooms { id, title, capacity, floor } }');

const getEvents = () => queryGraphQL('{ events { id, title, dateStart, dateEnd, users { id }, room { id } } }');

export { getRooms, getEvents };
