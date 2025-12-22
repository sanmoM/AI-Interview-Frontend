import Switch from '@/components/ui/inputs/switch';

const SettingsToggle = ({
  title,
  description,
  checked,
  onCheckedChange,
  variant = "default",
}) => {
  return (
    <div className="flex items-start justify-between py-4">
      <div className="flex-1 pr-8">
        <h4 className=" font-semibold text-text-primary  md:text-lg">{title}</h4>
        <p className=" text-text-gray font-medium mt-0.5 text-sm md:text-base">
          {description}
        </p>
      </div>
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={
          variant === "warning" ? "data-[state=checked]:bg-toggle-active" : ""
        }
      />
    </div>
  );
};

export default SettingsToggle;
