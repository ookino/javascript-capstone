const API = {
  getMeals: async (endpoint) => {
    const res = await fetch(`${endpoint}`, { method: 'GET' });
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  },

  getLikes: async () => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/',
      { method: 'GET' },
    );
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  },
  postLike: async (itemId) => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.text();
      return data;
    }
  },

  getComments: async (mealId) => {
    const res = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/comments?item_id=${mealId}`,
      { method: 'GET' },
    );
    if (!res.ok) {
      return 'No comments available for this meal';
    }
    const data = await res.json();
    return data;
  },

  postComment: async (itemId, username, comment) => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/comments/',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
          username,
          comment,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.text();
      return data;
    }
  },

  getReservations: async (mealId) => {
    const res = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/reservations?item_id=${mealId}`,
      { method: 'GET' },
    );
    if (!res.ok) {
      return 'No reservations available for this meal';
    }
    const data = await res.json();
    return data;
  },

  postReservations: async (itemId, username, startdate, enddate) => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/reservations/',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
          username,
          date_start: startdate,
          date_end: enddate,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.text();
      return data;
    }
  },
};

export default API;