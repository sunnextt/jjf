import ExpirySession from "../utils/expirysession";

export default async function authHeader() {
  const data = await ExpirySession.get("access");

  let config = {
    headers: {
      Authorization: `Bearer ${data.access_token}`,
    },
  };
  return new Promise((resolve) => {
    resolve(config);
  });
}
