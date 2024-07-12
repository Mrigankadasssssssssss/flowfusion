import ProfileForms from "@/components/forms/ProfileForms";
import React from "react";

type Props = {};

const Settings = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 flex p-6 z-10 items-center border-b bg-background/50 backdrop-blur-lg">
        Settings
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
            <h2 className="text-2xl font-bold">User Profile</h2>
            <p className="text-md text-white/50">Add or Update your Information.</p>
        </div>
        <ProfileForms/>
      </div>
    </div>
  );
};

export default Settings;
