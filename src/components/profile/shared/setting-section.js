const SettingsSection = ({ title, children, showDivider = true }) => {
  return (
    <div className="mb-2">
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <div className="space-y-0">{children}</div>
      {showDivider && <div className="h-px bg-divider mt-4" />}
    </div>
  );
};

export default SettingsSection;