export const getStoredToken = () => {
  const jwtToken = localStorage.getItem("token");
  return jwtToken;
};

export const storedToken = (token: string | null | undefined) => {
  if (token === null || token === undefined) {
    localStorage.removeItem("token");
    return;
  }

  localStorage.setItem("token", token);
};
