import { Flex, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const NguoiGui: React.FC = () => {
  return (
    <VStack align="normal" bgColor="white" shadow="md" rounded="md" p="4" spacing="5">
      <Text fontWeight={'bold'} color="primary.700" mb={'1'}>
        Người gửi
      </Text>

      <Flex gap={1} flexDirection={{ base: 'column', lg: 'row' }}>
        <Text w={200}>Mã khách hàng:</Text>
        <Input placeholder="Nhập mã khách hàng" size="sm" rounded="md" />
      </Flex>

      <Flex gap={1} flexDirection={{ base: 'column', lg: 'row' }}>
        <Text w={200}>Điện thoại:</Text>
        <Input placeholder="Nhập số điện thoại" size="sm" rounded="md" />
      </Flex>

      <Flex gap={1} flexDirection={{ base: 'column', lg: 'row' }}>
        <Text w={200}>Họ tên:</Text>
        <Input placeholder="Nhập họ tên" size="sm" rounded="md" />
      </Flex>

      <Flex gap={1} flexDirection={{ base: 'column', lg: 'row' }}>
        <Text w={200}>Địa chỉ:</Text>
        <Input placeholder="Nhập địa chỉ" size="sm" rounded="md" />
      </Flex>
    </VStack>
  );
};

export default NguoiGui;
