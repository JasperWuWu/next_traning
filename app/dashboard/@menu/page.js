const getData = async () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, 3000);
  });
};

const menu = async () => {
  const data = await getData();
  return <div>menu</div>;
};

export default menu;
