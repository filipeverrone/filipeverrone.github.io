import numberalize from "./numberalize";

const ageNow = (birth) => {
  const todayIntArray = numberalize(
    new Date().toLocaleString().slice(0, 10).split("/")
  );
  const birthIntArray = numberalize(
    new Date(birth).toLocaleString().slice(0, 10).split("/")
  );
  if (todayIntArray[2] === birthIntArray[2]) {
    return 0;
  }
  if (todayIntArray[2] > birthIntArray[2]) {
    if (todayIntArray[1] > birthIntArray[1]) {
      return todayIntArray[2] - birthIntArray[2];
    }
    if (todayIntArray[1] === birthIntArray[1]) {
      if (todayIntArray[0] >= birthIntArray[0]) {
        return todayIntArray[2] - birthIntArray[2];
      }
    }
  }
  return todayIntArray[2] - birthIntArray[2] - 1;
};

export default ageNow;
