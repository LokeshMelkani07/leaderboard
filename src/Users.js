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
      newUser: false,
    });
  }

  // Sort users based on score in ascending order
  users.sort((a, b) => {
    const [aMin, aSec, aMs] = a.score.split(":").map(Number);
    const [bMin, bSec, bMs] = b.score.split(":").map(Number);

    if (aMin !== bMin) return aMin - bMin;
    if (aSec !== bSec) return aSec - bSec;
    return aMs - bMs;
  });

  return users;
};

export default generateDummyData;
