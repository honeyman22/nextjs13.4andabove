import React from "react";

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    id: post.id?.toString(),
  }));
}
async function getDataById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  console.log(res?.ok);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({ params }) => {
  const { id } = params;
  const data = await getDataById(id);
  return (
    <div>
      page
      {data?.title}
    </div>
  );
};

export default Page;
