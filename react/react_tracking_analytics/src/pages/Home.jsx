const testTimemout = () => {
  for (let i = 0; i < 1e6; i++) {
    return;
  }
};

export const Home = () => {
  const start = performance.now();
  testTimemout();
  const end = performance.now();
  console.log(`difference: ${(end - start) / 1000}`);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Button
      </button>
    </div>
  );
};
