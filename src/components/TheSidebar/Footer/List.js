import FooterListItem from "./ListItem";

const TheFooterList = () => {
  return (
    <ul>
      {["Cookies", "Privacy"].map((label) => {
        return <FooterListItem key={label}>{label}</FooterListItem>;
      })}
    </ul>
  );
};

export default TheFooterList;
