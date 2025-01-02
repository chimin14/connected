import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-customCyan text-white dark:bg-gray-900">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-16 py-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <img src="/images/home/logo.svg" className="h-12 mr-3" alt="connectED Logo" />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">connectED</span>
        </Link>
      </div>
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-4 text-white dark:bg-gray-900 lg:text-left">
        <div className="container p-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* About Us Section */}
            <div id="about" className="mb-6 md:mb-0">
              <h5 className="mb-2 font-medium uppercase">About Us</h5>
              <p className="mb-8">
                connectED is a platform dedicated to bridging gaps through shared learning and collaborative projects.
                It provides opportunities in education, internships, volunteering, and open calls for students. This
                website was developed as part of an academic project, showcasing web development skills. Links and
                images are placeholders and should be replaced with real data.
              </p>
            </div>
            {/* Links Section */}
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Categories</h2>
                <ul className="text-gray-100 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Education</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Internships</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Open Calls</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Volunteering</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow Us</h2>
                <ul className="text-gray-100 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="https://www.facebook.com/chimiin03" className="hover:underline" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://www.instagram.com/chimiin03/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://www.linkedin.com/in/amina-jusic/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
              <div id="contact">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact</h2>
                <ul className="text-gray-100 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <p>Email: <Link href="mailto:connected@gmail.com" className="hover:underline">connected@gmail.com</Link></p>
                  </li>
                  <li>
                    <p>Phone: +387 62 888 321</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-100 sm:text-center dark:text-gray-400">
              &copy; 2025 connectED. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
              {/* Social Icons */}
              <Link href="https://www.facebook.com/chimiin03" className="text-black-100 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="mailto:connected@gmail.com" className="text-gray-100 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
                <span className="sr-only">Gmail</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
