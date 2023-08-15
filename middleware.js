import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [""]
    : ["http://localhost:3000", "https://www.uv100.com"];

export const middleware = (req) => {
  // req.header中可以取得連入的網域
  const origin = req.headers.get("origin");
  console.log(origin);
  if (origin && !allowedOrigins.includes(origin)) {
    // 這段邏輯是如果他沒有origin或是沒有在allowedOrigins清單中，就將此req排除
    return new NextResponse(null, {
      // 如果是用new NextResponse 第一個參數就是回傳的body，第二個參數是headers等其他參數
      // 第一個要傳回去的值是物件，要使用JSON.stringify包住
      // 除了MiddleWare要設定外，要使用的API也要設定同源政策Access-Control-Allow-Origin，需轉至api資料夾底下的route.js設定
      status: 400,
      statusText: "Forbidden",
      headers: {
        "Content-type": "text/plain",
      },
    });
  }
  // 如果上面都符合，就將req傳下去，與Express相同，要使用next
  //   return NextResponse.next();

  // console.log(req.nextUrl);
  // nextUrl中可以取的參數等資料
  let { pathname, searchParams } = req.nextUrl;
  // pathname可以抓取目前的網址
  //   console.log(pathname);

  // 可以使用searchParams取得get網址中的參數
  // console.log(searchParams.get("test"), "searchParams..........");

  // redirect 參數 第一個要將轉換的url傳入，第二個要將目前的網址傳入，就可以達到轉址
  if (pathname.startsWith("/posts/2")) {
    return NextResponse.redirect(new URL("/posts/1", req.url));
  }

  // rewrite也與redircet類似
  // 可以將目前頁面的轉換成另一個指定頁面呈現，但網址不改變
  // 傳入參數與redireect相同，第一個呈現頁面網址，第二個目前的網址
  if (pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/about-2", req.url));
  }
};

export const config = {
  // 在matcher中比對到的網址，就可以進入到middleware中
  // matcher 可以放正規表達式，或是要多個網址，可以使用陣列
  // 若要特定route底下的網址都符合，可以使用:path*，這樣都會進入MiddleWare
  matcher: ["/about", "/dashboard", "/posts/:path*"],
};
