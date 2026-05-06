// SECTIONS
import Home from '@/components/sections/home/Home';
import Frontend from '@/components/sections/frontend/Frontend';
import Backend from '@/components/sections/backend/Backend';
import Blockchain from '@/components/sections/blockchain/Blockchain';
import Solidity from '@/components/sections/solidity/Solidity';

export default function Page() {
  return (
    <>
      <Home />
      <Frontend />
      <Backend />
      <Blockchain />
      <Solidity />
    </>
  );
}
