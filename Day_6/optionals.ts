interface User {
  name: string;
  info?: {
    email?: string;
  };
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "empty info";
}

console.log(getEmailEasy({ name: "Yousef", info: { email: "yousef@gm.com" } }));
