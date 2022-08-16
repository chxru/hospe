import { Center, Group, LoadingOverlay, Text } from '@mantine/core';

export const SplashScreen = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Group>
        <Center style={{ width: '100%', height: '100vh' }}>
          <Text size="xl" weight={600}>
            Hospe
          </Text>

          <LoadingOverlay
            loaderProps={{ size: 'md', color: 'blue', variant: 'bars' }}
            overlayOpacity={0.3}
            overlayColor="#c5c5c5"
            visible
            mb={'xl'}
          />
        </Center>
      </Group>
    </div>
  );
};
