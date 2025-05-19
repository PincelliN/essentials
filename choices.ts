enum Role {
  Admin,
  Editor,
  Guest,
}

let usersRoles: Role = Role.Admin; // userRoles=0

usersRoles = Role.Editor; // userRoles=1

usersRoles = 2; // Role.Guest

enum Work {
  Admin = "Admin",
  Editor = "Editor",
  Guest = "Guest",
}

let userWork: Work = Work.Admin; // userWork Admin
userWork = Work.Editor; // userWork Editor

//literal union

let Sport: "Football" | "Basketball" | "Tennis" | "Volleyball";

Sport = "Basketball";
Sport = "Football";

//type

type Sport = "Football" | "Basketball" | "Tennis" | "Volleyball";

type User = {
  name: string;
  lastName: string;
  sport: Sport;
};

let userSport: User = {
  name: "Nic",
  lastName: "Pincelli",
  sport: "Volleyball",
};
