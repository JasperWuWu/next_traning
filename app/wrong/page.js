const About = () => {
  const e = new Error("Test Error", {
    cause: { code: "This is problem", value: [123, 456] },
  });
  e.name = "This is Example";
  throw e;
  return <div>About</div>;
};
export const metadata = {
  title: "Wrong",
  description: "Test Wrong",
};

export default About;
