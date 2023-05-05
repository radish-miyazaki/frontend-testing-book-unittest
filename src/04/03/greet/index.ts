import { getMyProfile } from "../fetchers";

export const getGreet = async () => {
  const data = await getMyProfile();
  if (!data.name) {
    return 'Hello, annonymous user!';
  }

  return `Hello, ${data.name}`;
}