const stringSerializer = (str: string) => (
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
);

export default stringSerializer;
