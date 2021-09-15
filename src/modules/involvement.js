const involvement = {
  likes: (likesData, mealID) => {
    const mealLikes = likesData.find((i) => i.item_id === mealID);
    if (mealLikes !== undefined) {
      return mealLikes.likes;
    }
    return 0;
  },
  reservations: (reservationsData, mealID) => {
    const reservationLists = reservationsData.find((i) => i.item_id === mealID);
    if (reservationLists !== undefined) {
      return reservationLists.reservations;
    }
    return 0;
  },
};

export default involvement;
