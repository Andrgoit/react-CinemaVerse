const formatDate = (time) => {
  const newDate = new Date(time);

  let dd = newDate.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = newDate.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  let yyyy = newDate.getFullYear();

  return dd + "." + mm + "." + yyyy;
};

export default formatDate;
