import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import MaPhieuGui from './MaPhieuGui';
import NguoiGui from './NguoiGui';

const NhapDonLe: React.FC = () => {
  return (
    <SimpleGrid spacing={5} columns={{ base: 1, lg: 2 }}>
      <SimpleGrid spacing={3}>
        <MaPhieuGui />
        <NguoiGui />
      </SimpleGrid>
      <Box></Box>
    </SimpleGrid>
  );
};

export default NhapDonLe;
