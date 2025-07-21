async function getForm(req, res) {
  const locals = {
    title: "New message",
  };

  res.render("pages/form.ejs", locals);
}

module.exports = {
  getForm,
};
