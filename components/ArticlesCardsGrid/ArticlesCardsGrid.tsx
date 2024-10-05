`use client`;

import { SimpleGrid, Card, Image, Text, ActionIcon, Group, Avatar, Badge, Container, AspectRatio, rem, Title } from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import classes from './ArticleCardGrid.module.css';

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    tag: 'Story telling',
    date: 'August 18, 2022',
    Source: 'LinkedIn'
  },
  {
    title: 'Best forests to visit in North America',
    tag: 'Dicussions',
    date: 'August 27, 2022',
    source: 'Twitter'
  },
  {
    title: 'Hawaii beaches review: better than you think',
    tag: 'Story telling',
    date: 'September 9, 2022',
    source: 'LinkedIn'
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    tag: 'Product',
    date: 'September 12, 2022',
    source: 'Twitter'
  },
];

export function ArticlesCardsGrid() {

  const cards = mockdata.map((article) => (
    <Card withBorder padding="lg" radius="md" className={classes.card}>

      <Badge w="fit-content" variant="light">
        {article.tag}
      </Badge>

      <Text fw={700} className={classes.title} mt="xs">
        {article.title}
      </Text>

      <Card className={classes.footer}>
        <Group justify="space-between">
        <Text fz="xs" c="dimmed">
            posted 34 minutes ago
          </Text>
          <Group gap={0}>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconShare
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Group>
      </Card>
    </Card>
  ));

  return (
    <Container className={classes.outer} py="xl">
            <Title className={classes.blogtitle} order={2}>
            <span className={classes.highlight}>Blogs</span>
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
