import RoomService from "@roomservice/browser";

async function authCheck({ room }) {
  const response = await fetch("http://localhost:8080/api/roomservice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      room,
    }),
  });

  if (response.status === 401) {
    throw new Error("Unauthorized!");
  }

  const body = await response.json();
  return body;
}


const rs = new RoomService({
  auth: authCheck,
});

export default rs;
