const TheFooter = () => {
  return (
    <footer className="mt-auto mb-8 ml-6 text-left">
      <ul>
        {["Cookies", "Privacy"].map((item) => {
          return (
            <li key={item}>
              <a href="/" className="text-[11px] hover:underline py-2">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default TheFooter;
