let AboutPage = React.createClass({
  render() {
    return (
      <div className="about-page-block">
        <div className="page-header">
          <h1>Что это вообще такое? <small>или коротко о проекте.</small></h1>
        </div>
        Пароход счастье, как понятно из названия несет счастье людям, в виде лайков. <br />
        Мы ежедневно выбираем одного счастливчика которому дарим свои лайки!
      </div>
    )
  }
});

module.exports = AboutPage;
