import ClientComponent from "@/src/components/ClientComponent";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      @@@components page string@@@
      <ClientComponent />
      <Link href="/">go to home page</Link>
    </div>
  );
}
