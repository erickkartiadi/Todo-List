export const getDate = () => {
  const currentDate = new Date();
  const weekday = Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    currentDate
  );
  const date = `${currentDate.getMonth()}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
  return { weekday, date };
};
