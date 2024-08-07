import { Client, Databases, Storage } from "appwrite";
export const appWriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  projectsColectionId: import.meta.env.VITE_APPWRITE_PROJECTS_COLECTION_ID,
  skillsColectionId: import.meta.env.VITE_APPWRITE_SKILLS_COLECTION_ID,
};
export const client = new Client();
client.setProject(appWriteConfig.projectId);
client.setEndpoint(appWriteConfig.url);
export const databases = new Databases(client);
export const storage = new Storage(client);