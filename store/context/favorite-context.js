import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteId, setFavoriteId] = useState([]);

  function addFavoriteId(id) {
    setFavoriteId((currentIds) => [...currentIds, id]);
  }

  function removeFavoriteId(id) {
    setFavoriteId((currentIds) => currentIds.filter((mealId) => mealId != id));
  }

  const value = {
    ids: favoriteId,
    addFavorite: addFavoriteId,
    removeFavorite: removeFavoriteId,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
