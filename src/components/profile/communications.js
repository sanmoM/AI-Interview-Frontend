import { useState } from "react";
import SettingsSection from "./shared/setting-section";
import SettingsToggle from "./shared/setting-toggle";

const CommunicationsSettings = () => {
  const [settings, setSettings] = useState({
    email: true,
    sms: true,
    fullTime: true,
    partTime: true,
    referral: true,
    jobOpportunities: true,
    workUpdates: true,
    unsubscribeAll: false,
  });

  const updateSetting = (key) => (checked) => {
    if (key === "unsubscribeAll" && checked) {
      setSettings({
        email: false,
        sms: false,
        fullTime: false,
        partTime: false,
        referral: false,
        jobOpportunities: false,
        workUpdates: false,
        unsubscribeAll: true,
      });
    } else if (key === "unsubscribeAll" && !checked) {
      setSettings((prev) => ({ ...prev, unsubscribeAll: false }));
    } else {
      setSettings((prev) => ({
        ...prev,
        [key]: checked,
        unsubscribeAll: false,
      }));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  mt-8 md:mt-10 lg:mt-14">
      <div className="lg:col-span-3">
        <h1 className="mb-1 font-semibold text-gray-900 md:text-lg">
          Communications
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Choose how and where you'd like to receive updates.
        </p>
      </div>

      {/* Settings */}
      <div className="lg:col-span-9">
        <SettingsSection title="Communication channels">
          <SettingsToggle
            title="Email"
            description="Receive important updates and interview details by email."
            checked={settings.email}
            onCheckedChange={updateSetting("email")}
          />
          <SettingsToggle
            title="Text message (SMS)"
            description="Get time-sensitive alerts like interview reminders."
            checked={settings.sms}
            onCheckedChange={updateSetting("sms")}
          />
        </SettingsSection>

        <SettingsSection title="Opportunity types">
          <SettingsToggle
            title="Full-time opportunities"
            description="Contact me about full-time roles."
            checked={settings.fullTime}
            onCheckedChange={updateSetting("fullTime")}
          />
          <SettingsToggle
            title="Part-time opportunities"
            description="Contact me about part-time roles."
            checked={settings.partTime}
            onCheckedChange={updateSetting("partTime")}
          />
          <SettingsToggle
            title="Referral opportunities"
            description="Contact me about referral opportunities."
            checked={settings.referral}
            onCheckedChange={updateSetting("referral")}
          />
        </SettingsSection>

        <SettingsSection title="General" showDivider>
          <SettingsToggle
            title="Job opportunities"
            description="Receive notifications about new job openings, interviews, and invitations."
            checked={settings.jobOpportunities}
            onCheckedChange={updateSetting("jobOpportunities")}
          />
          <SettingsToggle
            title="Work-related updates"
            description="Get updates about offers, contracts, and project status changes."
            checked={settings.workUpdates}
            onCheckedChange={updateSetting("workUpdates")}
          />
          <SettingsToggle
            title="Unsubscribe from all"
            description="Turn this on to stop all outreach."
            checked={settings.unsubscribeAll}
            onCheckedChange={updateSetting("unsubscribeAll")}
            variant="warning"
          />
        </SettingsSection>
      </div>
    </div>
  );
};



export default CommunicationsSettings;
