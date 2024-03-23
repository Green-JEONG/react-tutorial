import {useParams} from "react-router-dom"

function TestParams() {
const {id}=useParams ();
  return (<h1>hello{id}</h1>
  );
}

export default TestParams;
