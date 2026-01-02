const ColumnHeader = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 py-8 justify-center md:space-x-1.5 space-y-1.5 md:space-y-0">
      <img src={icon} alt={`${label} icon`} height={20} width={20} />
      <span className="text-xs md:text-lg text-foreground font-bold">
        {label}
      </span>
    </div>
  );
};

export default ColumnHeader;
