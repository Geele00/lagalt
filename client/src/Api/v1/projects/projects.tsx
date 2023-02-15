export const getAll = async (options: {}) => {
  return fetch("localhost:8080/projects", { ...options })
    .then((res) => res.json())
    .then((data) => data);
};
