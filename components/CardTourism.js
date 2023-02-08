"use client";

import { Card, Image, Text } from "@mantine/core";

export default function CardTourism({ title, body, image }) {
  return (
    <Card shadow="lg" p="xl" component="a" target="_blank">
      <Card.Section>
        <Image src={image} height={200} alt="tourism bogota!" />
      </Card.Section>

      <Text
        weight={500}
        size="lg"
        color="#d1aa65"
        fw={700}
        ta="center"
        sx={{ fontFamily: "Oswald" }}
      >
        {title}
      </Text>

      <Text size="sm" ta="center">
        {body}
      </Text>
    </Card>
  );
}
