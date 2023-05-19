import { DrawerChakra } from "./component/Drawer";
import { Wrapper } from "./component/Wrapper";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const getAllData = await getData();
  return (
    <div className="home">
      <h2>Home Page</h2>
      <Wrapper allDatas={getAllData} />
      <DrawerChakra />
    </div>
  );
}
