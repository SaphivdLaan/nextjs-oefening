export default function Home() {
  return (
    <>
    
    <header className="bg-indigo-600 p-4">
      <div
        className="max-w-7xl mx-auto flex justify-between items-center text-white"
      >
        <h1 className="text-3xl font-bold">
          <a href="index.html" className="hover:underline">Next.js Tutorial</a>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="pages/routing.html" className="hover:underline">Routing</a>
            </li>
            <li>
              <a href="pages/tailwind.html" className="hover:underline">Tailwind</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-indigo-600 mb-6">
          What is Next?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Next.js is a React-based framework that enables server-side rendering
          (SSR), static site generation (SSG), and routing features out of the
          box. It offers a range of features like fast refresh, automatic code
          splitting, and optimized performance, making it a top choice for
          modern web development.
        </p>
        <p className="text-lg text-gray-700">
          Next.js simplifies the process of building production-ready React
          applications, with support for pages, routing, API routes, and easy
          deployment.
        </p>
      </div>
    </main>

    <footer className="bg-indigo-600 py-4">
      <div className="max-w-7xl mx-auto text-center text-white">
        <p>&copy; 2025 Next.js Tutorial. All Rights Reserved.</p>
      </div>
    </footer>

    </>
  );
}
