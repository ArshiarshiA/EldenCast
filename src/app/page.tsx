import Intro from "@/components/intro/intro";
import AllAshes from "@/components/sections/allAshes/allAshes";
import AllBosses from "@/components/sections/allBosses/allBosses"

export default function Home() {
  return (
    <>
      <Intro />
      <AllBosses />
      <AllAshes />
    </>
  );
}
