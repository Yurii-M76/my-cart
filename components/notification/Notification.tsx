"use client";
import { useRouter } from "next/navigation";
import { ActionIconUI, BellIconUI } from "../ui";

const Notification = () => {
  const router = useRouter();
  return (
    <ActionIconUI
      variant="box-br-12"
      color="transparent"
      size="md"
      onClick={() => router.push("#")}
    >
      <BellIconUI width={24} height={24} />
    </ActionIconUI>
  );
};

export default Notification;
