import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header'
 

export default function HomePage() {
  return (
    <div>
      {/* Fullscreen Background Video */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover -z-20">
          <source src="/images/logo3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Header */}
        <Header />
       
        {/* Hero Section Content */}
        <section className="flex flex-wrap md:flex-nowrap items-center justify-between h-full px-8 text-white">
          {/* Downward Arrow */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <Link href="#mission-section">
      <Image
        src="/images/arrowd.svg"
        alt="Downward Arrow"
        width={50}
        height={50}
        className="animate-bounce cursor-pointer"
      />
    </Link>
  </div>
        </section>
      </div>


      {/* Mission Section */}
      <section className="bg-gradient-to-b from-customCyan to-gray-300 px-12 py-16 text-cyan-500">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500 font-style: italic font-sans">
          Your Success - Our Mission
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 px-6">
        <div className="bg-customCyan bg-opacity-70 p-6 rounded-lg shadow-lg px-14">
            <h1 className="text-6xl font-bold text-yellow-500 mr-4">1</h1>
            <p className="text-2xl font-light text-justify text-white">
              We believe in creating a platform that connects ambition with
              opportunity. Our mission is to empower individuals to discover,
              learn, and achieve their goals by providing access to education,
              volunteering, and career resources tailored to their unique
              journeys.
            </p>
          </div>
          <div className="bg-customCyan bg-opacity-70 p-6 rounded-lg shadow-lg">
             <h1 className="text-6xl font-bold text-yellow-500 mr-4">2</h1>
            <p className="text-2xl font-light text-justify text-white">
              Through personalized recommendations and a curated selection of
              opportunities, we make growth accessible to everyone. Whether
              you're a student, a professional, or someone looking to give
              back, we are here to guide you every step of the way toward
              success.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 items-center px-6">
          <div>
            <Image
              src="/images/say.jpg"
              alt="Person Image"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-700 mb-4">
              What others say?
            </h3>
            <p className="text-lg italic text-justify text-gray-600">
              "Thanks to Opportunities Hub, I landed my dream internship with a
              leading company in my field, which gave me invaluable hands-on
              experience and mentorship. On top of that, I found volunteering
              opportunities that allowed me to give back to my community while
              building skills and connections that I never thought possible.
              This platform truly opened doors for me, helping me grow both
              professionally and personally. It’s more than just a
              website—it’s a game-changer for anyone looking to make the most
              out of their potential!"
            </p>
            <Link href="#" className="text-customCyan mt-3 inline-block">
              See more stories →
            </Link>
          </div>
        </div>
      </section>

     {/* Opportunities Section */}
<section className="bg-gradient-to-b from-gray-300 to-customCyan px-8 md:px-12 py-16 w-full relative">
  <h2 className="text-4xl font-bold text-gray-800 mb-8">Opportunities</h2>

  {/* Image Grid */}
  <div className="flex flex-col space-y-20">
    {/* First Row */}
    <div className="flex flex-wrap md:flex-nowrap space-x-10">
      {/* First Image with Overlay */}
      <div className="relative w-full md:w-[570px] h-[295px]">
        <Image
          src="/images/call0.png"
          alt="Check more open calls!"
          layout="intrinsic"
          width={570}
          height={255}
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 rounded-lg">
          <h3 className="text-white text-2xl font-bold mb-2">
            Check more open calls!
          </h3>
          <Link
            href="/opportunities"
            className="text-white underline hover:text-blue-400"
          >
            View More →
          </Link>
        </div>
      </div>

      {/* Second Image */}
      <div className="relative w-full md:w-[570px] h-[255px]">
        <Image
          src="/images/call1.jpg"
          alt="INDUSAC Open Call for Students"
          layout="intrinsic"
          width={570}
          height={255}
          className="rounded-lg object-cover"
        />
      </div>
    </div>

    {/* Second Row */}
<div className="flex flex-col md:flex-row gap-6">
  {/* Third Image */}
  <div className="relative flex-grow-0 flex-shrink-0 w-full md:w-[370px] h-[255px]">
    <Image
      src="/images/call2.png"
      alt="Call for Participation"
      layout="intrinsic"
      width={370}
      height={255}
      className="rounded-lg object-cover"
    />
  </div>

  {/* Fourth Image */}
  <div className="flex-grow-0 flex-shrink-0 w-full md:w-[370px] h-[255px]">
    <Image
      src="/images/call2.png"
      alt="ACC Student Talent Search"
      layout="intrinsic"
      width={370}
      height={255}
      className="rounded-lg object-cover"
    />
  </div>

  {/* Fifth Image */}
  <div className="relative flex-grow-0 flex-shrink-0 w-full md:w-[370px] h-[255px]">
    <Image
      src="/images/call2.png"
      alt="Open Call for Participants"
      layout="intrinsic"
      width={370}
      height={255}
      className="rounded-lg object-cover"
    />
  </div>
</div>

  </div>

  {/* Arrow Button */}
  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] cursor-pointer">
    <Image
      src="/images/arrowr.svg"
      alt="Next"
      layout="intrinsic"
      width={50}
      height={50}
      className="object-contain"
    />
  </div>

  {/* All Projects Button */}
  <div className="flex justify-center mt-24">
    <button className="flex items-center bg-customCyan text-white py-4 px-8 rounded-lg text-lg hover:bg-gray-800 transition">
      All Projects →
    </button>
  </div>
</section>


<Footer />

    </div>
  );
}
