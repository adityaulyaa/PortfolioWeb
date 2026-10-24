import { GET, POST, PUT, PATCH, DELETE } from "../src/app/api/skills/route";

async function test() {
  const resGet = await GET();
  const dataGet = await resGet.json();
  console.log("GET status:", resGet.status, "| data items count:", dataGet.data?.length);

  const resPost = await POST();
  console.log("POST status:", resPost.status);

  const resPut = await PUT();
  console.log("PUT status:", resPut.status);

  const resPatch = await PATCH();
  console.log("PATCH status:", resPatch.status);

  const resDel = await DELETE();
  console.log("DELETE status:", resDel.status);
}

test();
