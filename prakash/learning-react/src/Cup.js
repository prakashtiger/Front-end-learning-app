//let guest = 0;

function Cup( {guest}) {
  // Bad: changing a preexisting variable!
//  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet( {children}) {
  return (
    <>
   <div className="side"> {children}</div>
   <div className="menu">  {children}</div>
      {/* <Cup key={1} guest={1}/>
      <Cup key={2} guest={1}/>
      <Cup key={3} guest={1}/> */}
    </>
  );
}