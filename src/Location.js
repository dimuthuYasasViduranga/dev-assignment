import useFetch from "./useFetch";

const Location = () => {

  const { data: locations, error, isPending } = useFetch('https://api.megaport.com/v2/locations');
  
  return (
    <div className="location">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { locations && (
        <div>
          <h2>MegaPort Json</h2>
          <label><b>Message:</b></label>
          <p>{ locations.message }</p>
          <label><b>Terms:</b></label>
          <p>{ locations.terms }</p>
          <label><b>Data:</b></label>
          <p>{ JSON.stringify(locations.data) }</p>
        </div>
      )}
    </div>
  );
}
 
export default Location;