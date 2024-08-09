/* eslint-disable react/prop-types */
function Layout(props) {
  console.log(props);
  const { navigation, contents } = props;

  return (
    <div className="container">
      <div className="navigation">{navigation}</div>
      <div className="contents">{contents}</div>
    </div>
  );
}

export default Layout;
