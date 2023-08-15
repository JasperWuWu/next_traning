import { NextResponse } from "next/server";

// 要打API的位置
// http://localhost:3000/api/posts

const url = "https://jsonplaceholder.typicode.com/posts";

export const GET = async (req) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    const Origin = req.headers.get("origin");
    // 使用new NextResponse去傳值時，第一個參數為data，要使用JSON.stringify包住
    // 後面若服務是有提供給其他網域使用時，要將headers包住，Access-Control-Allow-Origin，並將對方網域放入
    return new NextResponse(JSON.stringify(data), {
      headers: {
        "Access-Control-Allow-Origin": Origin,
        "Content-type": "application/json",
      },
    });
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
};

export const POST = async (req) => {
  const { title, body, userId } = await req.json();
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
    });
    let data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
};
