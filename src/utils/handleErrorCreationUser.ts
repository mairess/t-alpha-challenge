const handleErrorCreationUser = (error: string, matcher: string) => {
  return error.split(', ').find((err) => err.includes(matcher));
};

export default handleErrorCreationUser;
