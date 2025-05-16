"use client";
import { useRouter } from "next/navigation";
import { ActionIconUI, ProfileIconUI } from "../ui";

const Profile = () => {
  const router = useRouter();
  return (
    <ActionIconUI
      size="md"
      variant="box-br-12"
      color="light-blue"
      onClick={() => router.push("#")}
    >
      <ProfileIconUI
        width={24}
        height={24}
        strokeWidth="0"
        fill="currentColor"
      />
    </ActionIconUI>
  );
};

export default Profile;
