import Adam from "../assets/Adam.jpg"
import Button from "../components/button";
import Corenavbar from "../components/navbar"

export default function Home() {
  return (
    <>
    <div>
        <Corenavbar></Corenavbar>   
      <img src={Adam}></img>
      <Button name="Ondrej"/>
      </div>
    </>
  );
}