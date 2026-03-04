import { OrganizationSwitcher } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <OrganizationSwitcher />
    </div>
  );
}
