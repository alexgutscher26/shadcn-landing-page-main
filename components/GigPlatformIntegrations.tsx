import Image from 'next/image';

const integrations = [
  { name: 'Uber', logo: '/uber-logo.png' },
  { name: 'Lyft', logo: '/lyft-logo.png' },
  { name: 'DoorDash', logo: '/doordash-logo.png' },
  { name: 'Instacart', logo: '/instacart-logo.png' },
  { name: 'TaskRabbit', logo: '/taskrabbit-logo.png' },
];

export const GigPlatformIntegrations = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Integrated with Top Gig Platforms
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {integrations.map((platform) => (
          <div key={platform.name} className="text-center">
            <Image
              src={platform.logo}
              alt={`${platform.name} logo`}
              width={100}
              height={100}
              className="mb-2"
            />
            <p className="text-sm font-medium">{platform.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};