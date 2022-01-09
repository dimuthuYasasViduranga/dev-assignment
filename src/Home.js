import useFetch from "./useFetch";
import BaseTable from "./BaseTable";
import { Columns } from './Columns';

const Home = () => {
  const { error, isPending, data: bakes } = useFetch('http://localhost:8000/bakes')

  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { bakes && <BaseTable bakes={bakes} Columns={Columns}/> }
    </div>
  );
}
 
export default Home;