const serilizeData = (data) => {
  sessionStorage.setItem("echoState", JSON.stringify(data));
};

export { serilizeData };
