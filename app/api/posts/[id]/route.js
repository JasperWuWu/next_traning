import { NextResponse } from "next/server";

// 動態API位置
// http://localhost:3000/api/posts/[id]

const url = "https://jsonplaceholder.typicode.com/posts";

// 第一個參數是req,第二個是路徑中的id值
export const GET = async (_, { params }) => {
  const id = params.id;
  try {
    let response = await fetch(`${url}/${id}`);
    let data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
};

export const PUT = async (_, { params }) => {
  const id = params.id;
  try {
    let response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        title: "Greet",
        body: "JasperWu",
        userId: "100",
      }),
    });
    let data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
};

export const PATCH = async (_, { params }) => {
  const id = params.id;
  try {
    let response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        title: "Hello",
        body: "JasperWu",
      }),
    });
    let data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
};

export const DELETE = async (_, { params }) => {
  const id = params.id;
  try {
    let response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    let data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
};
