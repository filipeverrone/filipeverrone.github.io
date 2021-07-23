const numberalize = (list) => {
  for (let i = 0; i < list.length; i++) {
    list[i] = Number(list[i]);
  }
  return list;
};

export default numberalize;
