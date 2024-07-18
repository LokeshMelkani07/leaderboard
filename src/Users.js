const generateDummyData = () => {
  const users = [];
  for (let i = 0; i < 50; i++) {
    users.push({
      id: i + 1,
      username: `User${i + 1}`,
      score: `${Math.floor(Math.random() * 60)
        .toString()
        .padStart(2, "0")}:${Math.floor(Math.random() * 60)
        .toString()
        .padStart(2, "0")}:${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")}`,
    });
  }
  return users;
};

export default generateDummyData;
