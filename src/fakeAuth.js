export const users = [
  {
    username: "suyash",
    password: "pradhan",
  },
  {
    username: "soham",
    password: "de",
  },
  {
    username: "pratik",
    password: "pawaskar",
  },
  {
    username: "jaslin",
    password: "koshy",
  },
];

const findUserByUsername = (username) => {
  return users.find((user) => user.username === username);
};

export const fakeAuth = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUserByUsername(username);
      if (user.password === password) {
        return resolve({ success: true, message: "Verified", status: 200 });
      }
      reject({ success: false, message: "Failed", status: 401 });
    }, 2000);
  });
};
