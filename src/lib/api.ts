import { Project, ProjectsData, SkillsData } from "@/Types";
import { appWriteConfig, databases } from "./appwriteConfig";

export const getOneProject = async (id: string) => {
  try {
    const data = await databases.getDocument(
      appWriteConfig.databaseId,
      appWriteConfig.projectsColectionId,
      id
    );
    return data as Project;
  } catch (error) {
    console.log(error);
  }
};
export const getProjects = async () => {
  try {
    const data = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.projectsColectionId
    );
    return data.documents as ProjectsData;
  } catch (error) {
    console.log(error);
  }
};
export const getSkills = async () => {
  try {
    const data = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.skillsColectionId
    );
    return data.documents as SkillsData;
  } catch (error) {
    console.log(error);
  }
};
