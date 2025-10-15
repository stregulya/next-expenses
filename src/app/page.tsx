import Buttons from "@/ui/Buttons/Buttons";
import OverallBalance from "@/ui/OverallBalance/OverallBalance";
import Stats from "@/ui/Stats/Stats";
import Transactions from "@/ui/Transactions/Transactions";

export default function Home() {
  return (
    <main>
      <OverallBalance />
      <Buttons />
      <Transactions />
      <Stats />
    </main>
  );
}
