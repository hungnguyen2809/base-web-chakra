import { Flex, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const MaPhieuGui: React.FC = () => {
  return (
    <VStack align="normal" bgColor="white" shadow="md" rounded="md" p="4">
      <Text fontWeight={'bold'} color="primary.700" mb={'1'}>
        Phiếu gửi
      </Text>
      <Flex gap={1} flexDirection={{ base: 'column', lg: 'row' }}>
        <Text w={200}>Mã phiếu gửi:</Text>
        <Input placeholder="Nhập mã phiếu gửi" size="sm" rounded="md" />
      </Flex>
    </VStack>
  );
};

export default MaPhieuGui;
