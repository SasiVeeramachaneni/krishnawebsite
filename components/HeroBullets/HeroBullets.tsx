import { Image, Container, Title, Button, Group, Text, Avatar, Center } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import image from './manshouting.jpg';
import classes from './HeroBullets.module.css';

export function HeroBullets() {

  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
        <Center><Avatar src={image.src} alt="it's me" radius="xl" size="xl" /></Center>
        <Title className={classes.title} ta="center" mt={20}>
        Hi, I am{' '}
        </Title>
        <Title className={classes.title} ta="center"><span className={classes.highlight}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'yellow' }}>
          Krishna Potluri
        </Text></span>
      </Title>

          <Group mt={30} className={classes.buttons}>
            <Button size="lg" leftSection={<IconBrandLinkedin size={30} />} className={classes.control}>
              Connect on LinkedIn
            </Button>
            <Button variant="outline" size="lg" className={classes.control}>
              Blogs
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
