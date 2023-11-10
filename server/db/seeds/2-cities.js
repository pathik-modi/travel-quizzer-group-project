/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cities').insert([
    {
      continent: 'Europe',
      country: 'France',
      city: 'Paris',
      description:
        "Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as the City of Light.",
    },
    {
      continent: 'Europe',
      country: 'Italy',
      city: 'Milan',
      description:
        "The city Milan is the capital city of the region of Lombardy in northern Italy. It is the second largest city by population in Italy, behind Rome. It is Italy's leading financial centre and its most prosperous manufacturing and commercial city. fashion",
    },
    {
      continent: 'Europe',
      country: 'Switzerland',
      city: 'Basel',
      description:
        "Basel is widely regarded as Switzerland's cultural capital, and with good reason: in this city you will encounter art at every turn, whether you stroll through the beautiful Old Town or visit one of almost 40 museums.",
    },
    {
      continent: 'Europe',
      country: 'England',
      city: 'London',
      description:
        'It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium. ',
    },
    {
      continent: 'Africa',
      country: 'Morroco',
      city: 'Chefchaouen',
      description:
        'Built on a mountainside, Chefchaouen is a city with a special vibes. It unique charm gives an impression of unreality. With its blue-rinsed houses, the whole city seems to be bathed in azure. You walk around as if you were in a dream.',
    },
    {
      continent: 'North America',
      country: 'Canada',
      city: 'Vancouver',
      description:
        'The contemporary city. Nestled among snow-capped mountains on an ocean inlet, Vancouver has one of the most picturesque settings of any city in the world.',
    },
    {
      continent: 'North America',
      country: 'America',
      city: 'San Fransisco',
      description:
        'The city is known for its steep rolling hills and eclectic mix of architecture across varied neighborhoods, as well as its cool summers, fog, and landmarks, including the Golden Gate Bridge, cable cars, Alcatraz, along with the Chinatown and Mission districts.',
    },
    {
      continent: 'North America',
      country: 'America',
      city: 'Los Angeles',
      description:
        'The huge, sprawling, and tortuously shaped city of Los Angeles occupies a sizable portion of the southern part of the county. ',
    },
    {
      continent: 'South America',
      country: 'Brazil',
      city: 'Sao Paolo',
      description:
        'São Paulo, colloquially known as Sampa, is one of these cities that never sleep. There is always something going on. From plays and cultural exhibits to bars and restaurants that are open at all hours of the day and night, visitors have no problem finding something to do.',
    },
    {
      continent: 'Asia',
      country: 'Japan',
      city: 'Tokyo',
      description:
        'Tokyo, the capital of Japan, is vibrant as a city that leads Japan and the world. One of the attractions of Tokyo is that people from various regions and countries gather and interact with each other, and there is a tendency for many cultures to merge and to create new things.',
    },
    {
      continent: 'Asia',
      country: 'Japan',
      city: 'Kyoto',
      description:
        "There's so much history and heritage in Kyoto thanks to its place at the center of Japanese culture for over 1,000 years. You can learn about the ancient samurai culture, find out about the country's traditional arts like tea ceremony, or even get a glimpse into Kyoto's history of producing sake rice wine.",
    },
    {
      continent: 'Asia',
      country: 'Korea',
      city: 'Seoul',
      description:
        "The nation's capital is a cutting-edge cityscape of glass, steel and concrete skyscrapers, which tower over traditional wooden houses with tiled roofs and a maze of cobbled alleys in distinct, village-like districts.",
    },
    {
      continent: 'Europe',
      country: 'Korea',
      city: 'Busan',
      description:
        "Busan is South Korea's second largest city and seaport, and it's a laid-back, metropolitan destination. Its pace is slower, and its diversity more pronounced, than the country's capital city of Seoul. Busan has an intriguing medley of culture and history, beautiful natural settings and exciting adventures.",
    },
  ])
}
