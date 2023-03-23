enum ADDEDBY {
  "Developer",
  "User",
}

export interface SkillSearchRes {
  skillId: number;
  name: string;
  addedBy: ADDEDBY;
  imageUrl: string;
}
