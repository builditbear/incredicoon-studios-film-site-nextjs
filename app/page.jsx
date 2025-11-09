import CardCarousel from "./components/card-carousel";
import FeaturedWorks from "./components/featured-works";

export default function HomePage() {
  return (
    <div>
      <FeaturedWorks
        imageSrc="/images/home/hero.jpg"
        roleInProduction="Role in Production"
        movieTitle="Movie Title"
        releaseYear="20XX"
      />
      <CardCarousel
        projects={[
          { imageSrc: '/images/home/horses-near-me.png', title: 'HORSES NEAR ME' },
          { imageSrc: '/images/home/frightmares.png', title: 'FRIGHTMARES' },
          { imageSrc: '/images/home/diogenes.png', title: 'DIOGENES' },
          { imageSrc: '/images/home/salty-sirens.png', title: 'SALTY SIRENS' },
        ]}
      />
    </div>
  );
}
