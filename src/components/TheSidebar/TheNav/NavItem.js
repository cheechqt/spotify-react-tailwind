const NavItem = ({ classes, icon, children: label, onClick }) => {
  const handleClick = (e) => {
    if (!onClick) return;
    e.preventDefault();
    onClick();
  };

  return (
    <a href="/" className={classes} onClick={handleClick}>
      {icon}
      <span className="ml-4 text-sm font-semibold">{label}</span>
    </a>
  );
};

export default NavItem;
