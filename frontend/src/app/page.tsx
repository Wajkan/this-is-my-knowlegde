// SECTIONS
import Welcome from '@/components/sections/home/Welcome';
import Frontend from '@/components/sections/frontend/Frontend';
import Backend from '@/components/sections/backend/Backend';
import Blockchain from '@/components/sections/blockchain/Blockchain';
import Solidity from '@/components/sections/solidity/Solidity';

export default function Page() {
  return (
    <>
      <Welcome />
      <Frontend />
      <Backend />
      <Blockchain />
      <Solidity />
    </>
  );
}
