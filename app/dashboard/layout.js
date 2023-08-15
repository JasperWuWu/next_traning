export default function RootLayout({ children, header, menu }) {
  return (
    <>
      <div className="h-8 bg-slate-800 text-white text-center">{header}</div>
      {/* {Math.random() > 0.5 ? <div>{children}</div> : <div>{menu}</div>} */}
      <div className="flex text-white">
        <div className="h-auto w-1/2 bg-yellow-500">{children}</div>
        <div className="h-8 flex justify-center items-center w-1/2 bg-red-800">
          {menu}
        </div>
      </div>
    </>
  );
}
