import Image from 'next/image';

export default function FeaturedWorks({ imageSrc, roleInProduction, movieTitle, releaseYear }) {
  return (
    <div className="relative w-full h-[calc(100vh-3rem)] flex flex-col">
      <div className="relative flex-1 w-full">
        <Image
          src={imageSrc}
          alt={`${movieTitle} - ${roleInProduction}`}
          fill
          priority
          className="object-cover"
        />
      </div> 
      <div className="relative px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-black drop-shadow-lg">
            {roleInProduction}
          </div>
          <div className="text-2xl font-light text-black">
            {movieTitle}
          </div>
          <div className="text-2xl font-light text-black">
            {releaseYear}
          </div>
        </div>
      </div>
    </div>
  );
}
