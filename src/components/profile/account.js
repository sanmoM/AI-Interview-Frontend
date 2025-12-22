import { useState } from "react";
import { FiUser } from "react-icons/fi";
import Button from "../ui/buttons/button";
import SettingsToggle from "./shared/setting-toggle";
import BorderButton from "../ui/buttons/border-button";
import SettingButton from "./shared/setting-button";

const Account = () => {
  const [generativeProfile, setGenerativeProfile] = useState(true);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  mt-8 md:mt-10 lg:mt-14">
      <div className="lg:col-span-3">
        <h1 className="mb-1 font-semibold text-gray-900 md:text-lg">Account</h1>
        <p className="text-sm text-gray-500 mt-1">
          Input your preference and delete your account.
        </p>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-9 space-y-6">
        {/* Avatar Section */}
        <div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-4xl bg-muted flex items-center justify-center bg-bg-gray">
              <FiUser className="w-10 h-10 text-description-text" />
            </div>
            <BorderButton className="rounded-full px-4 md:px-6 w-fit !py-2 !text-sm">
              Change avatar
            </BorderButton>
          </div>
          <p className="text-sm text-description-text mt-3">
            JPG, PNG, or GIF. Max 2 MB. Files over 150KB will be compressed.
          </p>
        </div>

        {/* Generative Profile Pictures */}
        <div className="">
          <SettingsToggle
            title="Generative profile pictures"
            description="Let the platform generate a professional photo from your AI interview. Your image will be created once your profile joins our talent pool."
            checked={generativeProfile}
            onCheckedChange={setGenerativeProfile}
          />
        </div>

        {/* Payout Preferences */}
        <div>
          <h4 className=" md:text-lg font-semibold text-text-primary">
            Payout preferences
          </h4>
          <p className=" text-text-gray mt-0.5 text-sm md:text-base">
            Choose how you want to receive your payouts standard or instant.
          </p>
          <div className="bg-yellow-100 rounded-2xl lg:rounded-full p-4 mt-6">
            <p className="text-sm font-medium text-yellow-600">
              Payment method setup required
            </p>
            <p className="text-sm text-yellow-600 mt-0.5">
              Complete your payment method setup during job acceptance to enable
              payouts.
            </p>
          </div>
        </div>
        <SettingButton
          title={"Change email"}
          description={
            "Transfer all your data and account-related communications to a new email address."
          }
        >
          <BorderButton className="rounded-full px-4 md:px-6 flex-shrink-0 w-fit !py-2 !text-sm">
            Change email
          </BorderButton>
        </SettingButton>
        <SettingButton
          title={"Delete account"}
          description={
            "Permanently delete the account and all data from the platform."
          }
        >
          <Button className="rounded-full px-4 md:px-6 flex-shrink-0 w-fit bg-red-300 hover:bg-red-200 text-red-600 !py-2 !text-sm">
            Delete account
          </Button>
        </SettingButton>
      </div>
    </div>
  );
};

export default Account;
