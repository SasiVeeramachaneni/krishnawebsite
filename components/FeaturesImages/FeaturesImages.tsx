import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import IMAGES from './images';
import classes from './FeaturesImages.module.css';

const data = [
  {
    image: 'auditors',
    title: 'Students',
    description: 'Azurill can be seen bouncing and playing on its big, rubbery tail',
  },
  {
    image: 'accountants',
    title: 'Software engineers',
    description: 'Fans obsess over the particular length and angle of its arms',
  },
  {
    image: 'lawyers',
    title: 'Law makers',
    description: 'They divvy up their prey evenly among the members of their pack',
  },
  {
    image: 'others',
    title: 'Others',
    description: 'Phanpy uses its long nose to shower itself',
  },
];

export function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={IMAGES[item.image]} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={1000} className={classes.wrapper}>

      <Title className={classes.title} order={2}>
         <span className={classes.highlight}>Story telling</span> is for everyone
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
        Stories are magic, they can create other worlds, emotions, ideas and make the everyday seem incredible. They can teach us empathy and take us on terrific journeys. They can make us laugh, cry, jump with fright and then comfort us with a happy ending.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
