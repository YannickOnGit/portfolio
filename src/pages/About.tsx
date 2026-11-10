export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-top mt-12 px-6 ">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
        ¯\_(ツ)_/¯
      </h1>
      <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-center">
        Sorry, this page will be updated soon.
      </h1>

      <p className="text-stone-200 text-sm mt-8 text-center">
        © {new Date().getFullYear()} Yannick Boulanger. All rights reserved.
      </p>
    </div>
  );
}
