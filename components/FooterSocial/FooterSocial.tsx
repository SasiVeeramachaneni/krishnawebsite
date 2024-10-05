import { Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
        <h4>Ⓒ Krishna Potluri</h4>
        </Group>
        <Group gap={5} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon component="a" radius="xl" href="https://www.twitter.com/" target="_blank" size="xl" color="#1DA1F2" variant="filled">
            <IconBrandTwitter style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="xl" radius="xl" color="#0A66C2" variant="filled">
            <IconBrandLinkedin style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}