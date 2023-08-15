import { NextResponse } from "next/server";

// API 位置
// http://localhost:3000/posts/[id]/test

const url = "https://jsonplaceholder.typicode.com/posts";

// 第一個參數是req,第二個是路徑中的id值
export const GET = async (req, { params }) => {
  console.log(req);
  const id = params.id;
  try {
    let response = await fetch(`${url}/${id}`);
    let data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
};

// 第一個參數是req,第二個是路徑中的id值
export const POST = async (req, { params }) => {
  console.log(req);
  const id = params.id;
  try {
    let response = await fetch(`${url}/${id}`);
    let data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
};
