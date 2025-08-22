import { db } from './config';
import { authors } from './schema';
import { eq } from 'drizzle-orm';

export default async function seedAuthors() {
  console.log('Starting authors seeding...');

  // Define authors for Praxis Notes content
  const authorData = [
    {
      name: 'Praxis Notes Team',
      email: 'team@praxisnotes.com',
      bio: 'The Praxis Notes team consists of experienced ABA professionals, software developers, and content creators dedicated to improving documentation efficiency for RBTs and BCBAs. Our team combines deep clinical expertise with innovative technology to create tools and resources that save time while maintaining the highest standards of compliance and quality.',
      avatarUrl: '/images/logo/praxis-note-logo-main.png',
    },
    {
      name: 'Mariana Alamo , RBT',
      email: 'mariana.alamo@praxisnotes.com',
      bio: 'Mariana Alamo is a Registered Behavior Technician with 4 years of hands-on experience providing ABA services to children and adolescents with autism spectrum disorder. She is passionate about effective session documentation and has extensive experience with various data collection systems. Mariana is currently pursuing her BCBA certification and frequently shares practical tips for new RBTs entering the field.',
      avatarUrl: null,
    },
  ];

  try {
    // Check existing authors to avoid duplicates
    for (const author of authorData) {
      const existingAuthor = await db.query.authors.findFirst({
        where: table => eq(table.email, author.email),
      });

      if (existingAuthor) {
        console.log(`Author "${author.name}" already exists, skipping`);
        continue;
      }

      // Insert new author
      await db.insert(authors).values({
        name: author.name,
        email: author.email,
        bio: author.bio,
        avatarUrl: author.avatarUrl,
      });

      console.log(`Inserted author: ${author.name}`);
    }

    console.log('Authors seeding completed successfully');
  } catch (error) {
    console.error('Error seeding authors:', error);
  }
}
