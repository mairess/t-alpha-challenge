const getToken = () => {
  return localStorage.getItem('token') || sessionStorage.getItem('token') || null;
};

export default getToken;
